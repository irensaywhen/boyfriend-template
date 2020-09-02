import EditorModal from './modal.js';
import fileReaderMixin from './fileReaderMixin';

export default class Avatar extends EditorModal {
  // Currently selected avatar. Data type - blob or file
  avatar = null;

  // Generated link pointing to the avatar locally in the browser
  newAvatarLink = null;

  // Previous avatar link
  prevAvatarLink = null;

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

    this.configuration.avatar = true;

    // FormData object containing avatar
    this.formData = null;

    // Array containing avatar input elements
    this.$avatarInputs = null;

    // Create FileReader instance to handle reading image data
    this.reader = new FileReader();

    console.log(this.classes);

    // Binding context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this.previewAvatar = this.previewAvatar.bind(this);
    this.submitAvatar = this.submitAvatar.bind(this);
    this.updateMarkup = this.updateMarkup.bind(this);
    this.generateFormData = this.generateFormData.bind(this);

    // Cache elements according to passed selectors
    this._cacheElements();

    // Setup event listeners
    this._setUpEventListeners();
  }

  /**
   * Function caches elements according to passed options.
   */
  _cacheElements() {
    super._cacheElements();

    // Avatar elements in the markup
    this.$avatar = $(this.selectors.elementSelector);

    // Avatar preview
    this.$avatarPreview = this.$modal.find(this.selectors.preview);

    // Save previous avatar to discard changes if user doesn't submit the form
    this.prevAvatarLink = this.$avatarPreview.attr('src');

    // Form
    this.$avatarForm = this.$modal.find(this.selectors.form);

    // Inputs
    this.$avatarInputs = this.$modal.find(this.selectors.input);
  }

  /**
   * Function setup event listeners on the initialization stage of the object creation
   */
  _setUpEventListeners() {
    super._setUpEventListeners();
    // Setup event handler for loading of the image data event
    this.reader.onload = e => {
      // Show avatar preview
      this.$avatarPreview.attr('src', e.target.result);

      this.$modalFooter.slideDown();

      this.newAvatarLink = e.target.result;
    };

    // Listen to changes on the input elements
    this.$avatarInputs.change(event => {
      this.previewAvatar(event.target);
    });

    // Submit avatar
    this.$avatarForm.submit(event => {
      event.preventDefault();

      this.submitAvatar();
    });
  }

  /**
   * This function is called when the process of avatar preview is occuring.
   * It accepts the input field from which the avatar is being upload
   * The function starts loading the image
   * @param {DOMElement} input
   */
  previewAvatar(input) {
    if (input.files && input.files[0]) {
      //Save the currently selected avatar
      this.avatar = input.files[0];

      //Start reading the image from the input
      this.reader.readAsDataURL(input.files[0]);
    }
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
   * Function updates the avatar in the editing area and in the menu
   */
  updateMarkup() {
    this.$avatar.attr('src', this.newAvatarLink);
  }

  /**
   * Function delete the newly uploaded avatar
   * If user didn't submit the form
   */
  discardChanges() {
    this.$avatarPreview.attr('src', this.prevAvatarLink);
  }
}
