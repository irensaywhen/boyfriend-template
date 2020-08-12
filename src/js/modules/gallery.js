import ServerRequest from "./requests.js";

export default class Gallery extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context

    this.galleryConfig = options["galleryManipulation"];

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    // Swiper slider
    this.$gallery = $(this.selectors.gallery);
    this.$slides = this.$gallery.find(this.selectors.photoContainer);
    this.$photos = this.$gallery.find(this.selectors.gallerySlide);

    // Elements inside modal
    this.$modal = $(this.selectors.modal);
    this.$modalImage = this.$modal.find(this.selectors.modalImage);
    this.$modalDescription = this.$modal.find(this.selectors.modalDescription);
    this.$modalPermissionButton = this.$modal.find(
      this.selectors.modalPermissionButton
    );
    this.$modalPrevArrow = this.$modal.find(this.selectors.prevArrow);
    this.$modalNextArrow = this.$modal.find(this.selectors.nextArrow);
  }

  _setUpEventListeners() {
    // Adjust modal based on the clicked photo
    this.$gallery.click((event) => {
      let target = event.target;

      if (target.tagName !== "IMG") return;

      this._generateModal(target);
    });

    // Add gallery behavior to modal
    this.$modal.click((event) => {
      // Show next photo when the photo is typed
      let target = event.target;

      if (
        !$(target).hasClass(this.galleryConfig.arrowClass) &&
        target.tagName !== "IMG"
      )
        return;

      this._changePhoto(target);
    });
  }

  _generateModal(target) {
    let { description, privacy, order, id } = target.dataset;
    let src = target.src;

    privacy = privacy === "true" ? true : false;

    // Add photo and description
    this.$modalImage.attr("src", src);
    this.$modalDescription.text(description);

    // Save the order and the id of the current image
    this.order = parseInt(order);
    this.id = id;

    // Handle arrow hiding on first/last photos
    this.order === 0 ? this._hidePrevArrow() : this._showPrevArrow();
    this.order === this.$slides.length
      ? this._hideNextArrow()
      : this._showNextArrow();

    // Toggle button visibility
    if (privacy) {
      this.$modalPermissionButton.removeClass("d-none");
    } else {
      this.$modalPermissionButton.addClass("d-none");
    }
  }

  // Manipulating photos
  _changePhoto(target) {
    let config = this.galleryConfig;

    if (target.tagName === "IMG" || $(target).hasClass(config.nextClass)) {
      this._showNextPhoto();
    }

    if ($(target).hasClass(config.prevClass)) {
      this._showPrevPhoto();
    }
  }
  _showNextPhoto() {
    console.log("Showing next photo....");
  }
  _showPrevPhoto() {
    console.log("Showing prev photo....");
  }

  // Hiding and showing arrows
  _hidePrevArrow() {
    this.$modalPrevArrow.hide();
  }
  _showPrevArrow() {
    this.$modalPrevArrow.show();
  }
  _hideNextArrow() {
    this.$modalNextArrow.hide();
  }
  _showNextArrow() {
    this.$modalNextArrow.show();
  }

  _swipePhoto() {}
}
