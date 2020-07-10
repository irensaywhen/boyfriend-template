import EditorModal from "./modal.js";

export default class PhotoEditor extends EditorModal {
  // Currently clicked photo
  photo = null;

  /**
   * Information about photo.
   *  photoData.id - id of the photo from the database
   *  photoData.id.img - photo image element
   *  photoData.id.src - photo src
   *  photoData.id.private - photo privacy information
   *  photoData.id.description - photo description
   */
  photoData = {};

  constructor(options) {
    super(options);

    this.configuration.editor = true;

    // Binding context
    this.prepareModal = this.prepareModal.bind(this);
    this.updateMarkup = this.updateMarkup.bind(this);
    this.updatePhotoInformation = this.updatePhotoInformation.bind(this);

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

    // Privacy label
    this.$privacyLabel = this.$modal.find(this.selectors["privacy-label"]);

    // Photo in editor
    this.$modalPhotoElement = this.$modal.find("img");

    // Photos gallery
    this.$gallery = $(this.selectors.gallery);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$gallery.click((event) => {
      let target = event.target;

      if (target.tagName !== "IMG") return;

      // Save photo
      this.photo = target;

      // Cache id
      let photoId = this.photo.dataset.id;

      // Make empty object for photo information
      this.photoData[photoId] = {};

      // Save photo information
      this.savePhotoInformation({ id: photoId, src: this.photo.src });
      this.savePhotoInformation(this.photo.dataset);

      // Adjust modal
      this.prepareModal(photoId);
    });

    // Delete photo when user clicks on deleting button
    this.$deleteButton.click((event) => {
      this.deletePhoto(event, this.photo);
    });

    this.$form.submit((event) => {
      event.preventDefault();

      this.updatePhotoInformation();
    });
  }

  async updatePhotoInformation() {
    // Cache id
    let id = this.photo.dataset.id;

    // Save information
    this.savePhotoInformation({
      id: id,
      privacy: this.$privacyInput.is(":checked"),
      description: this.$description.val(),
    });

    let response;

    try {
      // Make server request to update photo information
      response = await super.sendPhotoInformationToServer({
        id: id,
        privacy: this.photoData[id].privacy,
        description: this.photoData[id].description,
        headers: this.requests.savePhoto.headers,
        endpoint: this.requests.savePhoto.endpoint,
        method: this.requests.savePhoto.method,
      });
    } catch (error) {
      // Unsuccessful Popup
      this.showRequestResult({
        title: "Oops!",
        text: error.message,
        icon: "error",
      });
    }

    if (response.success) {
      // Delete photo container
      this.updateMarkup();

      // Successful Popup
      this.showRequestResult({
        title: "Success!",
        text: response.message,
        icon: "success",
      });

      this.closeModal();
    } else {
      // Unsuccessful Popup
      this.showRequestResult({
        title: "Oops!",
        text: response.message,
        icon: "error",
      });
    }
  }

  /**
   * Function updating photo in the gallery
   */
  updateMarkup() {
    let values = this.photoData[this.photo.dataset.id];

    for (let property in values) {
      if (property in this.photo.dataset) {
        this.photo.dataset[property] = values[property];
      }
    }
  }

  /**
   * Function generates content of the modal window
   * depending on the attributes of the clicked photo
   * @param {Number} id - database id of the photo
   */
  prepareModal(id) {
    // Set photo
    this.$modalPhotoElement.attr("src", this.photoData[id].src);

    // Generate photo id
    let photoId = "photo-" + id;

    // Set privacy
    this.$privacyInput
      .prop("checked", this.photoData[id].privacy)
      .attr("id", photoId);

    // Set toggle
    this.$privacyLabel.attr("for", photoId);

    // Set description
    this.$description.text(this.photoData[id].description);
  }

  clean() {
    this.photo = null;
    this.photoData = {};
  }
}