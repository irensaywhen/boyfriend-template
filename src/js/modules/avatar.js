import EditorModal from './modal.js';
import fileReaderMixin from './fileReaderMixin';

export default class Avatar extends EditorModal {
  /**
   * Constructor accepts options object which contains:
   * jQuery Object containing DOM Element for avatar preview,
   * jQuery objects containing DOM Elements of the avatar input
   * Server endpoint where to send avatar,
   * Headers to specify when sending avatar
   * @param {object} options
   */
  constructor(options) {
    super(options);
    // Set configuration for upload type
    this.configuration.avatar = true;

    // Binding context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this._submitAvatar = this._submitAvatar.bind(this);
    this._updateMarkup = this._updateMarkup.bind(this);

    // Class usage preparation
    this._cacheElements();
    this._setUpEventListeners();

    // Prepare avatar for using FileReader to load and preview photos
    Object.assign(Avatar.prototype, fileReaderMixin);
    // Initialization of the fileReader for avatar
    this.initializeFileReader({ form: this.$form, modal: this.$modal });
  }

  _cacheElements() {
    super._cacheElements();
    let selectors = this.selectors;

    // Avatar elements in the markup
    this.$avatar = $(selectors.elementSelector);
    // Avatar preview
    this.$avatarPreview = this.$modal.find(selectors.preview);
    // Save previous avatar to discard changes if user doesn't submit the form
    this.prevAvatarLink = this.$avatarPreview.attr('src');
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    // Here we need to listen to submit event also
    this.$form.submit(event => {
      event.preventDefault();

      this._submitAvatar();
    });
  }

  /**
   * Function specific to classes using FileReader Mixin.
   * It handles class-specific functionality required for preview
   * Here, it saves src and sets the loaded photo in preview container
   * @param {FileReader Object} fileReader - the resulting fileReader object
   * to preview loaded photo
   */
  _preview(fileReader) {
    // cache
    let src = fileReader.result;
    // update preview
    this.$avatarPreview.attr('src', src);
    // save src to update markup
    this.newAvatarLink = src;
  }

  /**
   * Function specific to classes using FileReader Mixin.
   * It saves file to allow futher upload in case of submitting the form
   * @param {File Object} file - reference to the file in the system
   */
  _saveFile(file) {
    this.avatar = file;
  }

  /**
   * The function to perform cleaning object fields after
   * all the actions with avatar upload are performed
   */
  clean() {
    // Delete formData object
    this.formData = null;
    // Update previous avatar link
    this.prevAvatarLink = this.$avatarPreview.attr('src');
    // Discard new link
    this.newAvatarLink = null;
    // Return the previous avatar status
    this.uploaded = false;
  }

  /**
   * Function to show newly uploaded avatar
   */
  _updateMarkup() {
    this.$avatar.attr('src', this.newAvatarLink);
  }

  /**
   * Show previous avatar
   */
  _discardChanges() {
    this.$avatarPreview.attr('src', this.prevAvatarLink);
  }

  /**
   * Function to generate formData object to send avatar to the server
   */
  _generateFormData() {
    super._generateFormData();

    this.formData.set('avatar', this.avatar, this.avatar.name);
  }

  /**
   * Function to submit avatar to the server
   */
  _submitAvatar() {
    let { headers, endpoint, method } = this.requests.saveAvatar;
    this._generateFormData();

    this.makeRequest({
      headers,
      endpoint,
      method,
      body: this.formData,
    })
      .then(response => {
        if (response.success) {
          // Save uploading progress
          this.uploaded = true;
          // Update markup
          this._updateMarkup();

          // Show successful Popup
          this.showRequestResult({
            title: response.title,
            text: response.message,
            icon: 'success',
          });

          this.closeModal();
          // Delete cached data about the file
          this.clean();
        } else {
          // Show unsuccessful Popup
          this.showRequestResult({
            title: response.title,
            text: response.message,
            icon: 'error',
          });
        }
      })
      .catch(error => {
        // Unsuccessful Popup
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }
}
