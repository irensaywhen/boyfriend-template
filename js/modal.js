class EditorModal {
  constructor(options) {
    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // Save passed options
    this.endpoint = options.endpoint;
    this.headers = options.headers;
    this.selectors = options.selectors;
  }
  /**
   * Function caches elements according to passed options.
   */
  cacheElements() {
    // Modal
    this.$modal = $(this.selectors.modal);

    // Closing button
    this.$closeButton = this.$modal.find(".close");

    // Deleting button
    if ("deleteButton" in this.selectors) {
      this.$deleteButton = this.$modal.find(this.selectors.deleteButton);
    }
  }
  /**
   * Function to close the modal
   */
  closeModal() {
    this.$closeButton.click();
  }
}
