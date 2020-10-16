import LazyLoading from './lazyLoading.js';
import formatTime from './formatTime.js';

export default class MessagesLazyLoading extends LazyLoading {
  constructor(options) {
    super(options);
  }

  /**
   * This function is specific to each class utilizing lazy loading parent class
   */
  _initializeObserver() {
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
         * 4. Trigger 'lazyLoading:itemsReady' event and pass messages with it
         *    This event is indicating that the messages are retrieved and prepared
         */
        this._getItems()
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
            $(document).trigger('lazyLoading:itemsReady', messages);
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
  }
}
