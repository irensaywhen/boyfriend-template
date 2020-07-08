class EditorModal extends ServerRequest {
  constructor(options) {
    super(options);
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
    this.makeURLObjects = this.makeURLObjects.bind(this);

    // Save passed options
    this.endpoint = options.endpoint;
    this.headers = options.headers;
    this.selectors = options.selectors;
    this.requests = options.requests;

    // Transform endpoints into URL Objects
    // Fix it later
    //this.makeURLObjects();
    this.makeURLObjects();
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

  makeURLObjects() {
    for (let request in this.requests) {
      this.requests[request].endpoint = new URL(
        this.requests[request].endpoint
      );
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
  async deletePhoto(event, photo) {
    event.preventDefault();

    if (this.configuration.editor) {
      // Make server request to delete photo
      let response = await super.deletePhoto({
        id: photo.dataset.id,
        headers: this.requests.deletePhoto.headers,
        endpoint: this.requests.deletePhoto.endpoint,
        method: this.requests.deletePhoto.method,
      });

      if (response.success) {
        // Add popup here
        alert(response.message);
        // Delete photo container
        $(photo).closest(this.selectors.container).remove();
        this.closeModal();
      } else {
        // Add unsuccessful popup here
        alert(response.message);
      }
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