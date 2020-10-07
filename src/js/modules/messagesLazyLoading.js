import ServerRequest from './requests.js';
import formatTime from './formatTime.js';

export default class MessagesLazyLoading extends ServerRequest {
  constructor(options) {
    super(options);

    // Binding context
    this._getMessages = this._getMessages.bind(this);

    this._setUpEventListeners();

    let searchParams = options.searchParams;
    for (let key in searchParams) {
      this.requests.messages.endpoint.searchParams.set(key, searchParams[key]);
    }
    /**
     * 1. Save observer options
     * 2. Get the root element
     * 3. Trigger lazyLoading:beforeObserve:
     * - This event is indicating that the observer is ready
     *    to revieve message to observe
     */
    const observerOptions = options.observerOptions;
    this.observerRoot = observerOptions.root = document.getElementById(
      observerOptions.root
    );
    $(document).trigger('lazyLoading:beforeObserve');
  }

  _setUpEventListeners() {
    let $document = $(document);

    $document.on('messages:afterGettingLastMessage', (event, lastMessage) => {
      // Stop observing the previously cached last message
      if (this.lastMessage) {
        this.observer.unobserve(this.lastMessage);
      }

      // Initialize observer
      this.observer =
        this.observer ||
        new IntersectionObserver(entries => {
          // Save the last message
          let element = entries[0];
          if (!element.isIntersecting) return;

          /**
           * 1. Get new messages from the server
           * 2. Sort them according to the timestamp
           * 3. Format timestamp and save as a human-readable time
           * 4. Trigger 'lazyLoading:messagesReady' event and pass messages with it
           *    This event is indicating that the messages are retrieved and prepared
           */
          this._getMessages()
            .then(messages => {
              // Prepare messages
              messages
                .sort((firstMessage, secondMessage) => {
                  return firstMessage.timestamp < secondMessage.timestamp
                    ? 1
                    : firstMessage.timestamp > secondMessage.timestamp
                    ? -1
                    : 0;
                })
                .forEach(message => {
                  message.time = formatTime(message.timestamp);
                });

              // Send them to display
              $document.trigger('lazyLoading:messagesReady', messages);
            })
            .catch(error => {
              this.showRequestResult({
                title: error.name,
                text: error.message,
                icon: 'error',
              });

              // For debugging
              console.error(error);
            });
        });

      // Save the new last message and observe it
      this.observer.observe((this.lastMessage = lastMessage));
    });
  }

  /**
   * Function to get messages from the server
   */
  _getMessages() {
    let { headers, endpoint, method } = this.requests.messages;

    return this.makeRequest({
      headers,
      endpoint,
      method,
    });
  }
}
