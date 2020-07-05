class PhotoEditor extends EditorModal {
  // Currently clicked photo
  photo = null;

  /**
   * Information about photo.
   * @param photoData.id - id of the photo from the database
   * @param photoData.id.img - photo image element
   * @param photoData.id.src - photo src
   * @param photoData.id.private - photo privacy information
   * @param photoData.id.description - photo description
   */
  photoData = {};

  constructor(options) {
    super(options);

    this.configuration.editor = true;

    // Data attributes of the current photo
    this.attributes = {
      id: "",
      description: "",
      private: false,
      src: "",
    };

    // Binding context
    this.getAttributes = this.getAttributes.bind(this);
    this.prepareModal = this.prepareModal.bind(this);

    // Prepare editor
    this.cacheElements();
    this.setUpEventListeners();
  }

  /**
   * Function caches elements according to passed options.
   */
  cacheElements() {
    // Cache elements required for gallery to work
    super.cacheElements();

    // Description
    this.$description = this.$modal.find(this.selectors.description);

    // Privacy input
    this.$privacyInput = this.$modal.find(this.selectors["privacy-input"]);
    console.log(this.$privacyInput);

    // Privacy label
    this.$privacyLabel = this.$modal.find(this.selectors["privacy-label"]);

    // Photo in editor
    this.$modalPhotoElement = this.$modal.find("img");

    // Photos triggering opening modal
    this.$photos = $(this.selectors.photos);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$photos.click((event) => {
      this.photo = event.target;
      let photoId = photo.dataset.id;

      // Prepare empty object
      this.photoData[photoId] = {};

      // Save data-* attributes
      this.savePhotoInformation(this.photo.dataset);

      //// Adjust modal according to retrieved attributes
      //this.prepareModal();
    });

    this.$deleteButton.click((event) => {
      this.deletePhoto(event, this.photo);
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
    let photoId = "photo-" + this.attributes.id;

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
    // Empty object for photo information
    this.photoData[element.dataset.id] = {};
    this.savePhotoInformation(element.dataset);
    console.log(this.photoData);
    console.log(element.dataset);
    // Save src attribute of the current photo
    this.attributes.src = element.src;

    // Save data-* attributes related to the current photo
    for (let dataAttribute in element.dataset) {
      // Don't save id attribute
      //if (dataAttribute === "id") continue;

      if (dataAttribute in this.attributes) {
        this.attributes[dataAttribute] = element.dataset[dataAttribute];
      }
    }

    if ("private" in this.attributes) {
      // Convert privacy into boolean
      this.attributes.private = JSON.parse(this.attributes.private);
    }
  }
}
