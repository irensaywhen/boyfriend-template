class Gallery {
  constructor(options) {}

  /**
   * Function retrieves data-* attributes of the passed element
   * @param {DOM Element} element
   */
  getDataAttributes(element) {}

  cacheElements() {}
}

class PhotoEditor extends Gallery {
  constructor(options) {
    super();

    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);

    // Save endpoint to submit avatar
    this.endpoint = options.endpoint;

    // Save headers
    this.headers = options.headers;

    // Save selectors
    this.selectors = options.selectors;

    // Cache elements
    this.cacheElements();
  }

  cacheElements() {
    // Cache elements required for gallery to work
    //super().cacheElements();

    // Modal
    this.$modal = $(this.selectors.modal);

    // Description
    this.$description = this.$modal.find(this.selectors.description);

    // Closing button
    this.$closeButton = this.$modal.find(".close");

    // Privacy input
    this.$privacy = this.$modal.find(this.selectors.privacy);

    // Photo in editor
    this.$photo = this.$modal.find("img");

    // Slides triggering opening modal
    this.$slides = $(this.selectors.slides);
  }

  setUpEventListeners() {}
}

class PhotoUploader {
  constructor() {}
}
