import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';
import debounce from './debounce.js';
import modifyHandle from './modifyHandle.js';

export default class ChatList {
  constructor(options) {
    // Save selectors
    const selectors = (this.selectors = options.selectors);

    // Prepare template for message
    this.messageTemplate = prepareTemplates(options.selectors.templateId);

    // Get chatlist container
    this.$chatList = $(selectors.chatList);

    if (selectors.search) {
      this.$search = $(selectors.search);
    }

    if (selectors.searchSpinner) {
      this.$searchSpinner = $(selectors.searchSpinner).hide();
    }

    // Prepare event listeners
    this._setUpEventListeners();
  }

  _setUpEventListeners() {
    let $document = $(document);

    if (this.$search) {
      this.$search.on(
        'input',
        debounce(event => {
          const searchData = event.target.value;

          this.$chatList.empty();

          this.$searchSpinner.show();

          $document.trigger('chatList:searchInputEnd', searchData);
        }, 300)
      );
    }

    $document
      .on('lazyLoading:itemsReady', (event, config) => {
        const { messages, scroll, search } = config;
        /**
         * 1. Get all the retrieved messages from the server
         * 2. Compile template
         * 3. Display messages in the Chat List container
         * 4. Scroll the first message into view
         * 5. Signal that the messages are displayed to re-init the observed target
         */
        let template = Handlebars.compile(this.messageTemplate);
        messages.forEach(message => {
          message.handle = modifyHandle(message.handle);
          this.$chatList.append(template(message));
        });

        if (scroll) {
          this.$chatList.animate({
            scrollTop:
              '+=' +
              this.$chatList.find(this.selectors.message).first().outerHeight(),
          });
        }

        if (search) {
          this.$searchSpinner.hide();
        }
        // Listen to this event, too, and re-observe the messages
        $document.trigger('items:afterDisplay');
      })
      .on('lazyLoading:beforeObserve items:afterDisplay', () => {
        /**
         * 1. Get the last message from the currently displayed messages
         * 2. Pass it with event signaling that the last message was get
         */
        let lastMessage = this.$chatList.find(this.selectors.message).last()[0];

        $document.trigger('items:afterGettingLastItem', lastMessage);
      });
  }
}
