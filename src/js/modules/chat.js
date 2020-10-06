import Handlebars from 'handlebars';
import HttpError from './httpError.js';
import prepareTemplates from './prepareTemplates.js';
import getAllUrlParams from './getAllUrlParams.js';
import permissionMixin from './permissionMixin.js';

export default class Chat {
  constructor(options) {
    // Bind context
    this._displayMessage = this._displayMessage.bind(this);
    this._setMessageStatus = this._setMessageStatus.bind(this);

    // Set debug options
    this.debug = options.debug || false;

    if (this.debug) {
      this.requests = options.requests;

      // Transform endpoints into URL objects
      for (let request in this.requests) {
        this.requests[request].endpoint = new URL(
          this.requests[request].endpoint
        );
      }
    }

    // Save selectors
    this.selectors = options.selectors;

    // Save class names
    this.classNames = options.classNames;

    // Prepare message templates to render them in the future
    this.messageTemplates = prepareTemplates(options.messageTemplateIds);

    this._cacheElements();
    this._setUpEventListeners();

    // Scroll to the bottom on the initialization step
    this.$chatContent.scrollTop(this.$messagesContainer.outerHeight());

    // Indicator signaling that the initial scroll was performed
    this.initialScroll = true;

    Object.assign(Chat.prototype, permissionMixin);
    this.initializePhotoPermissionHandling(options.photoPermissionConfig);
  }

  _cacheElements() {
    let selectors = this.selectors;

    this.$chat = $(selectors.chat);

    // Container in which the messages will be displayed
    this.$messagesContainer = this.$chat.find(selectors.messagesContainer);

    // Container with everything in the chat except header
    this.$chatContent = this.$chat.find(selectors.chatContent);

    // Button to send typed message
    this.$sendButton = this.$chat.find(selectors.sendButton).fadeOut(0);

    // Form containing textarea for typing messages
    this.$sendMessageForm = this.$chat.find(selectors.sendMessageForm);

    // Textarea to type message
    this.$sendMessageTextarea = this.$chat.find(selectors.message);
  }

  _setUpEventListeners() {
    // Cache
    let classNames = this.classNames,
      $document = $(document);

    /**
     * 1. Get query params
     * 2. If there is no params, or if there is no need to send message, return
     * 3. Get permission identifier from localStorage
     * 4. If it is doesn't match with the passed with query params, return
     * 5. Send asking permission message
     */
    $(window).on('load', () => {
      // Get search params here
      // And if we need to send message right after the chat is being opened, do it
      let params = getAllUrlParams();
      if (!params || !('sendMessage' in params)) return;

      let type = params.type;

      const permissionIdentifier = localStorage.getItem(type);

      localStorage.removeItem(type);

      if (params.identifier !== permissionIdentifier) return;

      $document.trigger('chat:sendMessageOnLoad', params);
    });

    // View sending button if message input is not empty
    this.$chat.on('input', event => {
      let $target = $(event.target);

      if (!$target.hasClass(classNames.message)) return;

      $target.val() ? this.$sendButton.fadeIn() : this.$sendButton.fadeOut(300);
    });

    // Submitting the message form
    this.$sendMessageForm.submit(event => {
      event.preventDefault();

      console.log('Submitting message form!');

      this._sendMessage('general');
    });

    // Send message when the sending button is clicked
    this.$sendMessageForm.click(event => {
      let $target = event.target;

      if (!$target.closest(this.selectors.sendButton)) return;

      this.$sendMessageForm.submit();
    });

    // Keyboard events
    this.$sendMessageForm.on('keydown', event => {
      let key = event.key;

      if (key === 'Enter' && !event.shiftKey) {
        console.log('Enter!');
        // If Enter is pressed
        event.preventDefault();

        // Submit the form
        this.$sendMessageForm.submit();
      }
    });

    // Send bonus message to the server
    $document
      .on(
        'present:send chat:sendMessageOnLoad permission:actionChosen',
        (event, rawMessageData = null, formData = null) => {
          // Prepare information to send it to the server
          let messageData = this._prepareMessage(rawMessageData, formData);

          // Send message data to the server
          this._sendMessage(messageData, rawMessageData);
        }
      )
      .on('lazyLoading:messagesReady', (event, ...messages) => {
        /**
         * 1. Display messages
         * 2. Signal that the messages are displayed to re-init the observed target
         */
        console.log(messages);

        messages.forEach(message => this._displayMessage(message, true));

        // Listen to this event, too, and re-observe the messages
        $document.trigger('messages:afterDisplay');
      })
      .on('lazyLoading:beforeObserve messages:afterDisplay', () => {
        /**
         * 1. Get the last message from the currently displayed messages
         * 2. Pass it with event signaling that the last message was get
         */
        let lastMessage = (this.lastMessage = this.$chat
          .find(this.selectors.allMessages)
          .first()[0]);

        $document.trigger('messages:afterGettingLastMessage', lastMessage);
      });

    /**
     * Event handler to preserve scroll position on prepend
     * 1. Get the current scroll of the chat container
     * 2. If it is 0, and initial scroll was performed, preserve the position
     *    of the last message
     */
    this.$chatContent.on('scroll', () => {
      let scroll = this.$chatContent.scrollTop();

      if (scroll < 1 && this.initialScroll) {
        this.$chatContent.scrollTop(2);
      }
    });
  }

  /**
   * This method prepares information to send it to the server
   *
   * With general messages:
   * 1. Get the message text from the message textarea
   * 2. Return stringified json with type = general, message text,
   * and indicator that the message is mine
   *
   * With superlike, return stringified json with type = superlike
   * and indicator that the message is mine
   *
   * With ptoho, return formData object, which can be send to the server
   * formData object contains all the information about the sent photo
   *
   * @param {Object} bonusData - information about the bonus - ex. type
   * @param {FormData object} formData - photo information to send it to the server
   */
  _prepareMessage(rawMessageData, formData) {
    // Get the bonus type
    let type = rawMessageData.type;

    switch (type) {
      case 'general':
        // Save message text
        let messageText = this._getMessageText();

        return JSON.stringify({
          type,
          mine: true,
          text: messageText,
        });
      case 'permissionRequest':
        return {
          type,
          mine: true,
          id: rawMessageData.id,
        };
      case 'permissionResponse':
        return {
          type,
          mine: true,
          action: rawMessageData.action,
        };
      case 'superlike':
      case 'premium':
        return JSON.stringify({
          type,
          mine: true,
        });

      case 'photo':
        return formData;
    }
  }

  /**
   *
   * @param {Object or FormData Object} messageData - message information
   * which will be sent to the server
   *
   * @param {*} bonusData - additional bonus information
   */
  _sendMessage(messageData, bonusData = null) {
    // Send message to server
    this._sendMessageToServer(messageData, bonusData)
      // Maybe we can handle successful/unsuccessful response here
      .then(response => {
        if (response.success) {
          console.log('Response after sending a message:');
          console.log(response);

          switch (response.type) {
            case 'general':
              // Show general message
              this._displayMessage(response);
              break;

            case 'special':
              if (response['photo']) {
                // Get src and description
                let { src, description } = bonusData;

                // Save src and description
                //response['src'] = src;
                //response['description'] = description;

                if (!response.src) {
                  response['src'] = src;
                }
                response['description'] = description;
              }

              // Show message after a delay to not to distract the user
              setTimeout(this._displayMessage, 1000, response);
              break;
          }
        } else {
          // We need to handle unsuccessful response here
          console.log('Error!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * This method is used to imulate client-server communication
   * Will be changed to WebSockets
   *
   * @param {String or FormData} messageData - information to send to the server
   * about the current bonus
   */
  _sendMessageToServer(messageData, bonusData = null) {
    let { method, headers, endpoint } = this.requests.send;

    bonusData
      ? endpoint.searchParams.set(bonusData.type, true)
      : endpoint.searchParams.set('general', true);

    if (bonusData.type === 'permissionResponse') {
      endpoint.searchParams.set('action', bonusData.action);
    }

    //Make a request here
    return fetch(endpoint, {
      method,
      headers,
      body: messageData,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HttpError('Http error', response);
        }
      })
      .then(json => {
        return json;
      });
  }

  /**
   * Get inputed message text from the message textarea
   */
  _getMessageText() {
    return this.$sendMessageTextarea.val();
  }

  _displayMessage(data, lazy = false) {
    // Prepare template for compilation - for general or special message type
    let compiled = Handlebars.compile(this.messageTemplates[data.type]);

    // Compile template with passed data
    compiled = compiled(data);

    if (!lazy) {
      // Default message displaying
      $(compiled)
        .appendTo(this.$messagesContainer)
        .addClass('visible')[0]
        .scrollIntoView({ behavior: 'smooth' });
    } else {
      let initialHeight = this.$messagesContainer.outerHeight();

      $(compiled).prependTo(this.$messagesContainer).addClass('visible');
    }

    // Change message status after a second for general message type
    // for testing purposes
    setTimeout(this._setMessageStatus, 1000, { id: 123, status: 'seen' });
  }

  _setMessageStatus({ id, status }) {
    // Find message with the given data-id attribute
    let $meta = this.$messagesContainer
      .find(`.message[data-id='${id}']`)
      .find('.meta');

    if (status === 'seen') {
      // If the message was seen
      $meta.prepend('<i class="fas fa-check-circle"></i>');
    }
  }
}
