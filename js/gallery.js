class Gallery {
  constructor(options) {
    // Binding context

    this.deletePhoto = this.deletePhoto.bind(this);
  }

  setAttributes() {}

  cacheElements() {}

  addNewPhotos() {}
}

class Photo extends Gallery {
  constructor(options) {
    super(options);

    // Data attributes of the current photo
    this.attributes = {
      id: "",
      description: "",
      private: false,
      src: "",
    };

    this.photo = null;

    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.getAttributes = this.getAttributes.bind(this);
    this.prepareModal = this.prepareModal.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);

    // Save endpoint to submit avatar
    this.endpoint = options.endpoint;

    // Save headers
    this.headers = options.headers;

    // Save selectors
    this.selectors = options.selectors;

    // Cache elements
    this.cacheElements();
    this.setUpEventListeners();
  }

  /**
   * Function caches elements according to passed options.
   */
  cacheElements() {
    // Cache elements required for gallery to work
    super().cacheElements();

    // Modal
    this.$modal = $(this.selectors.modal);

    // Description
    this.$description = this.$modal.find(this.selectors.description);

    // Closing button
    this.$closeButton = this.$modal.find(".close");

    // Deleting button
    this.$deleteButton = this.$modal.find(".delete");

    // Privacy input
    this.$privacyInput = this.$modal.find(this.selectors["privacy-input"]);

    // Privacy label
    this.$privacyLabel = this.$modal.find(this.selectors["privacy-label"]);

    // Photo in editor
    this.$modalPhotoElement = this.$modal.find("img");

    // Photos triggering opening modal
    this.$photos = $(this.selectors.photos);
  }

  setUpEventListeners() {
    this.$photos.click((event) => {
      // Set the currently clicked photo
      this.photo = event.target;
      // Get attributes of the clicked photo
      this.getAttributes(event.target);

      // Adjust modal according to retrieved attributes
      this.prepareModal();
    });

    this.$deleteButton.click((event) => {
      event.preventDefault();
      // Delete photo from markup
      // Later implement popup asking approval here
      this.deletePhoto();
      this.closeModal();
    });
  }

  /**
   * Function generates content of the modal window
   * depending on the attributes of the clicked photo
   */
  prepareModal() {
    // Set photo
    this.$modalPhotoElement.attr("src", this.attributes.src);

    // Generate photo id
    const photoId = "photo" + this.attributes.id;

    // Set privacy
    this.$privacyInput
      .prop("checked", this.attributes.private)
      .attr("id", photoId);

    // Set toggle
    this.$privacyLabel.attr("for", photoId);

    // Set description
    this.$description.text(this.attributes.description);
  }

  /**
   * Function retrieves attributes of the element
   * @param {element} DOMElement - Element to get attributes from
   */
  getAttributes(element) {
    // Save src attribute of the current photo
    this.attributes.src = element.src;

    // Save data-* attributes related to the current photo
    for (let dataAttribute in element.dataset) {
      if (dataAttribute in this.attributes) {
        this.attributes[dataAttribute] = element.dataset[dataAttribute];
      }
    }

    if ("private" in this.attributes) {
      // Convert privacy into boolean
      this.attributes.private = JSON.parse(this.attributes.private);
    }
  }

  /**
   * Function deletes photo from the markup
   * Maybe for photo upload add functionality to delete from upload modal
   */
  deletePhoto() {
    $(this.photo).closest(this.selectors.slides).remove();
  }
}

class PhotoUploader {
  constructor() {}
}
