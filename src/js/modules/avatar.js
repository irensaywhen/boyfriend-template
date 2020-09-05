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
    this.submitAvatar = this.submitAvatar.bind(this);
    this.updateMarkup = this.updateMarkup.bind(this);

    // Class usage preparation
    this._cacheElements();
    this._setUpEventListeners();

    // Prepare avatar for using FileReader to load and preview photos
    Object.assign(Avatar.prototype, fileReaderMixin);

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
    // Add it here
    this.$form.submit(event => {
      event.preventDefault();

      this.submitAvatar();
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

  updateMarkup() {
    this.$avatar.attr('src', this.newAvatarLink);
  }

  discardChanges() {
    this.$avatarPreview.attr('src', this.prevAvatarLink);
  }

  // Maybe, I can change this function to work through then rather than async/await
  // Plus think of error handling
  async submitAvatar() {
    this.generateFormData();

    let response;

    try {
      // Make server request to save avatar
      response = await this.makeRequest({
        headers: this.requests.saveAvatar.headers,
        endpoint: this.requests.saveAvatar.endpoint,
        method: this.requests.saveAvatar.method,
        body: this.formData,
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
      this.uploaded = true;
      this.updateMarkup();

      // Successful Popup
      this.showRequestResult({
        title: response.title,
        text: response.message,
        icon: 'success',
      });

      this.closeModal();
      this.clean();
    } else {
      // Unsuccessful Popup
      this.showRequestResult({
        title: response.title,
        text: response.message,
        icon: 'error',
      });
    }
  }
}
