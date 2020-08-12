import ServerRequest from "./requests.js";

export default class Gallery extends ServerRequest {
  constructor(options) {
    super(options);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    this.$gallery = $(this.selectors["gallery"]);
    this.$slides = this.$gallery.find(this.selectors["photoContainer"]);
    this.$photos = this.$gallery.find(this.selectors["gallerySlide"]);

    // Elements inside modal
    this.$modal = $(this.selectors["modal"]);
    this.$modalImage = this.$modal.find(this.selectors["modalImage"]);
    this.$modalDescription = this.$modal.find(
      this.selectors["modalDescription"]
    );
    this.$modalPermissionButton = this.$modal.find(
      this.selectors["modalPermissionButton"]
    );
  }

  _setUpEventListeners() {
    this.$gallery.click((event) => {
      let target = event.target;

      if (target.tagName !== "IMG") return;

      this._generateModal(target);
    });
  }

  _generateModal(target) {
    let { description, privacy, order } = target.dataset;
    let src = target.src;

    privacy = privacy === "true" ? true : false;

    // Add photo and description
    this.$modalImage.attr("src", src);
    this.$modalDescription.text(description);

    // Save the order of the current image
    this.order = order;

    // Toggle button visibility
    if (privacy) {
      this.$modalPermissionButton.removeClass("d-none");
    } else {
      this.$modalPermissionButton.addClass("d-none");
    }
  }
}
