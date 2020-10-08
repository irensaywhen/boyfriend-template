import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';

export default class ChatList {
  constructor(options) {
    // Save selectors
    this.selectors = options.selectors;

    // Prepare template for message
    this.messageTemplate = prepareTemplates(options.selectors.templateId);

    // Get chatlist container
    this.$chatList = $(this.selectors.chatList);

    // Prepare event listeners
    this._setUpEventListeners();
  }

  _setUpEventListeners() {
    let $document = $(document),
      messageHeight = this.$chatList
        .find(this.selectors.message)
        .first()
        .outerHeight();

    $document
      .on('lazyLoading:messagesReady', (event, ...messages) => {
        /**
         * 1. Get all the retrieved messages from the server
         * 2. Compile template
         * 3. Display messages in the Chat List container
         * 4. Scroll the first message into view
         * 5. Signal that the messages are displayed to re-init the observed target
         */
        let template = Handlebars.compile(this.messageTemplate);
        messages.forEach(message => this.$chatList.append(template(message)));

        this.$chatList.animate({
          scrollTop: '+=' + messageHeight,
        });

        // Listen to this event, too, and re-observe the messages
        $document.trigger('messages:afterDisplay');
      })
      .on('lazyLoading:beforeObserve messages:afterDisplay', () => {
        /**
         * 1. Get the last message from the currently displayed messages
         * 2. Pass it with event signaling that the last message was get
         */
        let lastMessage = this.$chatList.find(this.selectors.message).last()[0];

        $document.trigger('messages:afterGettingLastMessage', lastMessage);
      });
  }
}
