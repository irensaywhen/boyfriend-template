import LazyLoading from './lazyLoading.js';

export default class UsersLazyLoading extends LazyLoading {
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
         * 1. Get new users from the server
         * 2. Trigger 'lazyLoading:itemsReady' event and pass messages with it
         *    This event is indicating that the messages are retrieved and prepared
         */
        this._getItems()
          .then(users => {
            console.log(users);
            // Send them to display
            $(document).trigger('lazyLoading:itemsReady', users);
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
