import EditorModal from './modal.js';
import photoUploadMixin from './photoUploadMixin';

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
    this._submitAvatar = this._submitAvatar.bind(this);
    this._updateMarkup = this._updateMarkup.bind(this);

    // Class usage preparation
    this._cacheElements();
    this._setUpEventListeners();

    /**
     * Prepare avatar for photo upload:
     * 1. Initialize photo upload (FileReader, photo preview, drag'n'drop)
     * 2. Initialize loading indicator
     */
    Object.assign(Avatar.prototype, photoUploadMixin);
    this.initializePhotoUpload();
    this.initializeLoadingIndicators(this.$form);
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
    // Update previous avatar link
    this.prevAvatarLink = this.$avatarPreview.attr('src');
    // Discard new link
    this.newAvatarLink = null;
    // Return the previous avatar status
    this.uploaded = false;
    // Empty error container
    this.$errorContainer.empty();
  }

  /**
   * Show newly uploaded avatar
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
   * Function to submit avatar to the server
   */
  _submitAvatar() {
    let { headers, endpoint, method } = this.requests.saveAvatar;

    let formData = new FormData();
    formData.append('avatar', this.avatar, this.avatar.name);

    this.makeRequest({
      headers,
      endpoint,
      method,
      body: formData,
    })
      .then(response => {
        if (response.success) {
          // Save uploaded progress
          this.uploaded = true;
          // Update markup
          this._updateMarkup();

          var icon = 'success';

          this.closeModal();
          $(document).trigger('avatar:submitted');
          // Delete cached data about the file
          this.clean();
        } else {
          var icon = 'error';
        }

        this.showRequestResult({
          title: response.title,
          text: response.message,
          icon,
        });
      })
      .catch(error => {
        console.error(error);
        // Unsuccessful Popup
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }
}
