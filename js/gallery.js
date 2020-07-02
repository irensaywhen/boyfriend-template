class PreviewAvatar {
  /**
   * Constructor accepts jQuery Object containing DOM Element for avatar preview.
   * @param {jQuery Object} $avatarPreview
   * @param {jQuery Object} $photosPreviewsContainer
   */
  constructor($avatarPreview, $photosPreviewsContainer) {
    // Create FileReader instance to handle reading image data
    this.reader = new FileReader();

    //Container for photos previews
    this.$photosPreviewsContainer = $photosPreviewsContainer;

    //Avatar preview element
    this.$avatarPreview = $avatarPreview;

    // Binding context
    this.previewAvatar = this.previewAvatar.bind(this);
    this.previewPhotos = this.previewPhotos.bind(this);
    this.showPhotoPreview = this.showPhotoPreview.bind(this);

    // Setup event handler for loading of the image data event
    this.reader.onload = (e) => {
      this.$avatarPreview.attr("src", e.target.result);
    };
  }

  /**
   * This function is called when the process of avatar preview is occuring.
   * It accepts the input field from which the avatar is being upload
   * The function starts loading the image
   * @param {DOMElement} input
   */
  previewAvatar(input) {
    if (input.files && input.files[0]) {
      //Start reading the image from the input
      this.reader.readAsDataURL(input.files[0]);
    }
  }

  /**
   * Input field from which the photos are being upload
   * @param {DOMElement} input
   */
  previewPhotos(input) {
    if (input.files) {
      input.files.forEach((file) => {
        this.reader.readAsDataURL(file);
      });
    }
  }

  showPhotoPreview() {}
}
