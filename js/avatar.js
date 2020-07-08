class Avatar extends EditorModal {
  // Currently selected avatar. Data type - blob or file
  avatar = null;

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

    // Generated link pointing to the avatar locally in the browser
    this.newAvatarLink = null;

    // Previous avatar link
    this.prevAvatarLink = null;

    // FormData object containing avatar
    this.formData = null;

    // Array containing avatar input elements
    this.$avatarInputs = null;

    // Create FileReader instance to handle reading image data
    this.reader = new FileReader();

    // Binding context
    this.cacheElements = this.cacheElements.bind(this);
    this.previewAvatar = this.previewAvatar.bind(this);
    this.submitAvatar = this.submitAvatar.bind(this);
    this.updateMarkup = this.updateMarkup.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.generateFormData = this.generateFormData.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.clean = this.clean.bind(this);

    // Cache elements according to passed selectors
    this.cacheElements();

    // Setup event listeners
    this.setUpEventListeners();
  }

  /**
   * Function caches elements according to passed options.
   */
  cacheElements() {
    super.cacheElements();

    // Avatar elements in the markup
    this.$avatar = $(this.selectors.elementSelector);

    // Avatar preview
    this.$avatarPreview = this.$modal.find(this.selectors.preview);

    // Save previous avatar to discard changes if user doesn't submit the form
    this.prevAvatarLink = this.$avatarPreview.attr("src");

    // Form
    this.$avatarForm = this.$modal.find(this.selectors.form);

    // Inputs
    this.$avatarInputs = this.$modal.find(this.selectors.input);
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

  /**
   * Function is called to prepare formData object to send the avatar to the server
   */
  generateFormData() {
    // Create new formData object
    this.formData = new FormData();
    this.formData.set("avatar", this.avatar, this.avatar.name);
  }

  /**
   *
   */
  submitAvatar() {
    // If user didn't select new avatar
    // Close the avatar editing modal
    if (!this.avatar) {
      alert("Please select avatar");
      return;
    }

    // Generate formData object for the selected avatar
    this.generateFormData();

    fetch(this.requests.saveAvatar.endpoint, {
      method: this.requests.saveAvatar.method,
      headers: this.requests.saveAvatar.headers,
      body: this.formData,
    })
      .then((response) => {
        if (response.ok) {
          // Here we'll show some sort of popup
          alert("Everything is fine!");

          // Update the avatar status to not to discard changes
          this.uploaded = true;

          // Update markup
          this.updateMarkup();

          // Close modal
          this.closeModal();

          // Prepare avatar object for the futher uploads
          this.clean();
        } else {
          // Here we'll show some sort of popup
          alert("Something went wrong :(");
        }
      })
      .catch((error) => {
        // Here we'll show some sort of popup
        alert("Error occured!");
      });
  }

  /**
   * The function to perform cleaning object fields after
   * all the actions with avatar upload are performed
   */
  clean() {
    // Delete formData object
    this.formData = null;

    // Update previous avatar link
    this.prevAvatarLink = this.$avatarPreview.attr("src");

    // Discard new link
    this.newAvatarLink = null;

    // Return the previous avatar status
    this.uploaded = false;
  }

  /**
   * Function updates the avatar in the editing area and in the menu
   */
  updateMarkup() {
    this.$avatar.attr("src", this.newAvatarLink);
  }

  /**
   * Function delete the newly uploaded avatar
   * If user didn't submit the form
   */
  discardChanges() {
    this.$avatarPreview.attr("src", this.prevAvatarLink);
  }

  /**
   * Function setup event listeners on the initialization stage of the object creation
   */
  setUpEventListeners() {
    super.setUpEventListeners();
    // Setup event handler for loading of the image data event
    this.reader.onload = (e) => {
      // Show avatar preview
      this.$avatarPreview.attr("src", e.target.result);

      this.newAvatarLink = e.target.result;
    };

    // Listen to changes on the input elements
    this.$avatarInputs.change((event) => {
      this.previewAvatar(event.target);
    });

    // Submit avatar
    this.$avatarForm.submit((event) => {
      // Prevent form from normal submission
      event.preventDefault();
      this.submitAvatar();
    });
  }
}
