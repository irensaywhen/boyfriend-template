import EditorModal from './modal.js';

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

    // Binding context
    this._prepareModal = this._prepareModal.bind(this);
    this._updateMarkup = this._updateMarkup.bind(this);

    // Prepare editor
    this._cacheElements();
    this._setUpEventListeners();

    if (this.selectors.loading) {
      // Initializing loading indicator when the form is submitted
      this.initializeLoadingIndicators(this.$form);
    }
  }

  /**
   * Function caches elements according to passed options.
   */
  _cacheElements() {
    // Cache elements required for gallery to work
    super._cacheElements();

    // Elements of the modal
    this.$description = this.$modal.find(this.selectors.description);
    this.$privacyInput = this.$modal.find(this.selectors['privacy-input']);
    this.$privacyLabel = this.$modal.find(this.selectors['privacy-label']);
    this.$modalPhotoElement = this.$modal.find('img');

    // Photo gallery
    this.$gallery = $(this.selectors.gallery);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    this.$gallery.click(event => {
      let target = event.target;

      if (target.tagName !== 'IMG') return;

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
      this._prepareModal(photoId);
    });

    /**
     * When the user clicks on delete button:
     * 1. Make request to delete photo
     * 2. If everything is fine, remove photo from the markup and close the modal
     * 3. Show error popup otherwise
     */
    this.$deleteButton.click(async event => {
      event.preventDefault();

      let { headers, method, endpoint } = this.requests.deletePhoto;

      // Show loading indicator
      this.triggerLoadingIndicator();

      try {
        // Make server request to delete photo
        var response = await this.makeRequest({
          headers,
          endpoint,
          method,
          body: JSON.stringify({ id: this.photo.dataset.id }),
        });
      } catch (error) {
        // Unsuccessful Popup
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      }

      if (response.success) {
        // Delete photo container and close modal
        $(this.photo).closest(this.selectors.container).remove();
        this.closeModal();

        var icon = 'success';
      } else {
        var icon = 'error';
      }

      // Show resulting popup
      this.showRequestResult({
        title: response.title,
        text: response.message,
        icon,
      });
    });

    /**
     * When the form with new photo information is submitted:
     * 1. Save photo information to photoData
     * 2. Make request to the server
     * 3. If everything is fine, update markup, close modal, and show success popup
     * 4. If something went wrong, show error popup
     */
    this.$form.submit(async event => {
      event.preventDefault();

      // Cache
      let id = this.photo.dataset.id;

      // Save information
      this.savePhotoInformation({
        id: id,
        privacy: this.$privacyInput.is(':checked'),
        description: this.$description.val(),
      });

      let [privacy, description] = [
          this.photoData[id].privacy,
          this.photoData[id].description,
        ],
        { headers, method, endpoint } = this.requests.savePhoto;

      try {
        // Make server request to update photo information
        var response = await this.makeRequest({
          headers,
          endpoint,
          method,
          body: JSON.stringify({ id, privacy, description }),
        });
      } catch (error) {
        // Unsuccessful Popup
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      }

      if (response.success) {
        // Update photo in the markup and close modal
        this._updateMarkup();
        this.closeModal();

        // Set icon
        var icon = 'success';
      } else {
        var icon = 'error';
      }

      // Show resulting popup
      this.showRequestResult({
        title: response.title,
        text: response.message,
        icon,
      });
    });
  }

  /**
   * Function updating photo in the gallery
   */
  _updateMarkup() {
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
  _prepareModal(id) {
    // Set photo
    this.$modalPhotoElement.attr('src', this.photoData[id].src);

    // Generate photo id
    let photoId = 'photo-' + id;

    // Set privacy
    this.$privacyInput
      .prop('checked', this.photoData[id].privacy)
      .attr('id', photoId);

    // Set toggle
    this.$privacyLabel.attr('for', photoId);

    // Set description
    this.$description.text(this.photoData[id].description);
  }

  clean() {
    this.photo = null;
    this.photoData = {};
  }
}
