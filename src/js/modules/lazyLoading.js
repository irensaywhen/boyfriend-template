import ServerRequest from './requests.js';

export default class LazyLoading extends ServerRequest {
  constructor(options) {
    super(options);

    //Bind context
    this._getItems = this._getItems.bind(this);
    this._initializeObserver = this._initializeObserver.bind(this);

    this._setUpEventListeners();

    let searchParams = options.searchParams;
    for (let key in searchParams) {
      this.requests.items.endpoint.searchParams.set(key, searchParams[key]);
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

    $document.on('items:afterGettingLastItem', (event, lastMessage) => {
      // Stop observing the previously cached last message
      if (this.lastMessage) {
        this.observer.unobserve(this.lastMessage);
      }
      // Initialize observer
      this._initializeObserver();

      // Save the new last message and observe it
      this.observer.observe((this.lastMessage = lastMessage));
    });
  }

  _getItems() {
    let { headers, endpoint, method } = this.requests.items;

    return this.makeRequest({
      headers,
      endpoint,
      method,
    });
  }
}
