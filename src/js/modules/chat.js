import Handlebars from 'handlebars';
import HttpError from './httpError.js';
import prepareTemplates from './prepareTemplates.js';

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

    // Prepare testdata for displaying messages
    this.testData = {
      type: 'general',
      mine: false,
      text: 'Testing templating',
      time: '13:55',
      id: 125,
      seen: false,
    };

    // Save class names
    this.classNames = options.classNames;

    // Prepare message templates to render them in the future
    this.messageTemplates = prepareTemplates(options.messageTemplateIds);

    this._cacheElements();
    this._setUpEventListeners();

    //this._displayMessage(this.testData);
  }

  _cacheElements() {
    let selectors = this.selectors;

    this.$chat = $(selectors.chat);
    this.$messagesContainer = this.$chat.find(selectors.messagesContainer);
    this.$sendButton = this.$chat.find(selectors.sendButton).fadeOut(0);
    this.$sendMessageForm = this.$chat.find(selectors.sendMessageForm);
    this.$sendMessageTextarea = this.$chat.find(selectors.message);
  }

  _setUpEventListeners() {
    // Cache
    let classNames = this.classNames,
      $document = $(document);

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
    $document.on('present:send', (event, bonusData = null, formData = null) => {
      // Prepare information to send it to the server
      let messageData = this._prepareMessage(bonusData, formData);
      // Send message data to the server

      this._sendMessage(messageData, bonusData);
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
  _prepareMessage(bonusData, formData) {
    // Get the bonus type
    let type = bonusData.type;

    switch (type) {
      case 'general':
        // Save message text
        let messageText = this._getMessageText();

        return JSON.stringify({
          type: type,
          mine: true,
          text: messageText,
        });

      case 'superlike':
      case 'premium':
        return JSON.stringify({
          type: type,
          mine: true,
        });

      case 'photo':
        return formData;
    }
  }

  _sendMessage(messageData, bonusData = null) {
    // Send message to server
    this._sendMessageToServer(messageData)
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
                response['src'] = src;
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
  _sendMessageToServer(messageData) {
    let { method, headers, endpoint } = this.requests.send;

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

  _displayMessage(data) {
    // Prepare template for compilation - for general or special message type
    let compiled = Handlebars.compile(this.messageTemplates[data.type]);

    // Compile template with passed data
    compiled = compiled(data);

    $(compiled)
      .appendTo(this.$messagesContainer)
      .addClass('visible')[0]
      .scrollIntoView({ behavior: 'smooth' });

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
