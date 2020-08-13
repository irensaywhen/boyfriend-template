import ServerRequest from './requests.js';
import HttpError from './httpError.js';

export default class Gallery extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context

    this.galleryConfig = options['galleryManipulation'];

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
    this.$modalPermissionButton = this.$modal
      .find(this.selectors.modalPermissionButton)
      .fadeOut(0);
    this.$modalPrevArrow = this.$modal.find(this.selectors.prevArrow);
    this.$modalNextArrow = this.$modal.find(this.selectors.nextArrow);
  }

  _setUpEventListeners() {
    // Adjust modal based on the clicked photo
    this.$gallery.click(event => {
      let target = event.target;

      if (target.tagName !== 'IMG') return;

      this._generateModal(target);
    });

    // Add gallery behavior to modal
    this.$modal.click(event => {
      // Show next photo when the photo is typed
      let target = event.target;

      if (
        !$(target).hasClass(this.galleryConfig.arrowClass) &&
        target.tagName !== 'IMG'
      )
        return;

      this._changePhoto(target, false);
    });

    this.$modalPermissionButton.find('button').click(event => {
      event.preventDefault();

      this._askPermission();
    });

    // Touch support for mobile devices
    this._addTouchSupport();
  }

  _addTouchSupport() {
    let clientXStart, clientXEnd, distance;

    this.$modalImage.on('touchstart', event => {
      // Save coordinates of the initial touch point
      clientXStart = event.touches[0].clientX;
    });

    this.$modalImage.on('touchmove', event => {
      // Save coordinates while touch point is moving
      clientXEnd = event.touches[0].clientX;
    });

    this.$modalImage.on('touchend', () => {
      distance = clientXStart - clientXEnd;

      if (distance > this.touchTrottle) {
        // Don't swipe to the right if this is the last photo
        if (this.order === this.$slides.length) return;

        ++this.order;
      } else if (distance < -this.touchTrottle) {
        // Don't swipe to the left if this is the last photo
        if (this.order === 0) return;

        --this.order;
      }

      this._showNewPhoto();
    });
  }

  _askPermission() {
    let request = this.requests.permission;
    console.log(request);

    this.makeRequest({
      headers: request.headers,
      endpoint: request.endpoint,
      method: request.method,
    })
      .then(response => {
        console.log(response);
        if (response.success) {
          this.showRequestResult({
            title: response.title,
            text: response.message,
            icon: 'success',
          });
        } else {
          this.showRequestResult({
            title: response.title,
            text: response.message,
            icon: 'error',
          });
        }
      })

      .catch(error => {
        // Show error popup here
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }

  _generateModal(target, animation) {
    let { description, privacy, order, id } = target.dataset;
    let src = target.src;

    privacy = privacy === 'true' ? true : false;

    // Add photo or change it
    if (animation) {
      // Animate image
      this.$modalImage.fadeOut({
        duration: 400,
        queue: false,
        complete: () => {
          this.$modalImage.attr('src', src);
          this.$modalImage.fadeIn(400);
        },
      });

      // Animate description
      this.$modalDescription.fadeOut({
        duration: 400,
        queue: false,
        complete: () => {
          this.$modalDescription.text(description);
          this.$modalDescription.fadeIn(400);
        },
      });

      // Animate showing/hiding of privacy button
      if (privacy) {
        this.$modalPermissionButton.fadeIn({
          duration: 400,
          queue: false,
        });
      } else {
        this.$modalPermissionButton.fadeOut({
          duration: 400,
          queue: false,
        });
      }
    } else {
      this.$modalImage.attr('src', src);
      this.$modalDescription.text(description);

      privacy
        ? this.$modalPermissionButton.fadeIn(0)
        : this.$modalPermissionButton.fadeOut(0);
    }

    // Save the order and the id of the current image
    this.order = parseInt(order);
    this.id = id;

    // Handle arrow hiding on first/last photos
    this.order === 0 ? this._hidePrevArrow() : this._showPrevArrow();
    this.order === this.$slides.length
      ? this._hideNextArrow()
      : this._showNextArrow();
  }

  // Manipulating photos
  _changePhoto(target) {
    let config = this.galleryConfig;

    if (target.tagName === 'IMG' || $(target).hasClass(config.nextClass)) {
      ++this.order;
    }

    if ($(target).hasClass(config.prevClass)) {
      --this.order;
    }

    this._showNewPhoto();
  }

  _showNewPhoto() {
    // Find image
    let $img = this.$gallery.find(`img[data-order="${this.order}"]`);

    // Show it in modal
    this._generateModal($img[0], true);
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

  // Getters and setters
  get touchTrottle() {
    return 50;
  }
}
