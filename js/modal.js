class EditorModal {
  constructor(options) {
    // Making configuration object
    this.configuration = {
      avatar: false,
      uploader: false,
      editor: false,
    };

    if (this.configuration.avatar || this.configuration.uploader) {
      this.uploaded = false;
    }

    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.getFormInputs = this.getFormInputs.bind(this);
    this.savePhotoInformation = this.savePhotoInformation.bind(this);
    this.setPhotoData = this.setPhotoData.bind(this);
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

    // Form
    this.$form = this.$modal.find(this.selectors.form);

    // Closing button
    this.$closeButton = this.$modal.find(".close");

    // Deleting button
    if ("deleteButton" in this.selectors) {
      this.$deleteButton = this.$modal.find(this.selectors.deleteButton);
    }
  }

  setUpEventListeners() {
    if (this.configuration.avatar || this.configuration.uploader) {
      this.$closeButton.click((event) => {
        // If user closes modal without submitting changes
        if (!this.uploaded) {
          // Delete his newly uploaded photo
          this.discardChanges();
        }
      });
    }

    this.$form.submit((event) => {
      event.preventDefault();
      // Make server request here
      // And update markup
      // After that - clean all the cached data
      this.collectData();
      for (let id in this.photoData) {
        let photoData = this.photoData[id];

        this.updateMarkup({
          id: id,
          src: photoData.src,
          privacy: photoData.privacy,
          description: photoData.description,
        });
      }

      this.closeModal();
    });
  }

  getFormInputs() {
    console.log(this.$privacyInput.is(":checked"));
    let description = this.$description.val();
    console.log(description);
  }

  setPhotoData() {}

  generateFormData() {}

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

  /**
   * Function saving information about the photo
   * @param {object}
   * @param {object.id} id from the database for particular photo
   * @param {object.file} file object containing photo
   * @param {object.src} src for the image preview
   * @param {object.privacy} privacy input value
   * @param {object.description} description for the current photo
   */
  savePhotoInformation({
    id = null,
    file = null,
    src = null,
    privacy = false,
    description = null,
  }) {
    if (file) {
      this.photoData[id].file = file;
    }
    if (src) {
      this.photoData[id].src = src;
    }
    if (privacy) {
      this.photoData[id].privacy = JSON.parse(privacy);
    } else {
      this.photoData[id].privacy = false;
    }
    if (description) {
      this.photoData[id].description = description;
    }
  }
}
