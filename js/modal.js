class EditorModal {
  constructor(options) {
    // Making configuration object
    this.configuration = {
      avatar: false,
      uploader: false,
      editor: false,
    };

    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);

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

  /**
   * Function to delete photo
   * If used in editor, it will delete provided photo
   * If used in uploader, it will find the photo containing the currently clicked button
   * and delete the photo container
   */
  deletePhoto(event, photo) {
    event.preventDefault();

    if (this.configuration.editor) {
      // Delete photo container
      $(photo).closest(this.selectors.container).remove();
      this.closeModal();
    }

    if (this.configuration.uploader) {
      $(event.target).closest(this.selectors.container).remove();
    }
  }
}
