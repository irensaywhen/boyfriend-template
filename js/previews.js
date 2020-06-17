class Preview {
  /**
   * Constructor accepts jQuery Object containing DOM Element for avatar preview.
   * @param {jQuery Object} $avatarPreview
   * @param {jQuery Object} $photosPreviewsContainer
   */
  constructor($avatarPreview, $photosPreviewsContainer) {
    // Create FileReader instance to handle reading image data
    this.reader = new FileReader();

    // Fields responsible for indicating which part we're handling now
    this.avatarPreview = false;
    this.photosPreview = false;

    //Container for photos previews
    this.$photosPreviewsContainer = $photosPreviewsContainer;

    //Avatar preview element
    this.$avatarPreview = $avatarPreview;

    // Binding context
    this.previewAvatar = this.previewAvatar.bind(this);
    this.previewPhotos = this.previewPhotos.bind(this);
    this.showPhotoPreviews = this.showPhotoPreviews.bind.bind(this);

    // Setup event handler for loading of the image data event
    this.reader.onload = (e) => {
      if (this.avatarPreview) {
        //Change src attribute of the preview image to show the uploaded photo
        this.$avatarPreview.attr("src", e.target.result);

        //Uploading avatar has been finished
        this.avatarPreview = false;
      } else if (this.photosPreview) {
        //Uploading photos has been finished
        this.photosPreview = false;
      }
    };
  }

  /**
   * This function is called when the process of avatar preview is occuring.
   * It accepts the input field from which the avatar is being upload
   * The function starts loading the image
   * @param {DOMElement} input
   */
  previewAvatar(input) {
    // Declare we're working with avatar
    this.avatarPreview = true;

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
    // Declare we're working with photos
    this.photosPreview = true;

    if (input.files) {
      input.files.forEach((file) => {
        this.reader.readAsDataURL(file);
      });
    }
  }

  showPhotoPreview() {}
}
