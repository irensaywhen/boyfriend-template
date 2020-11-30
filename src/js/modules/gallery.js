import preparePhotoModal from './preparePhotoModal.js';
import ServerRequest from './requests.js';

export default class Gallery extends ServerRequest {
  constructor(options) {
    super(options);

    this.galleryConfig = options.galleryManipulation;
    this.redirectForPermission = options.redirectForPermission;

    this._cacheElements();
    this._setUpEventListeners();

    this.initializeLoadingIndicators(this.$modalPermissionForm);
  }

  _cacheElements() {
    const selectors = this.selectors;
    // Swiper slider
    this.$gallery = $(selectors.gallery);
    this.$slides = this.$gallery.find(selectors.photoContainer);
    this.$photos = this.$gallery.find(selectors.gallerySlide);

    // Elements inside modal
    let { modal, animateOnShown } = selectors;

    this.$modal = $(modal);
    this.$modalImage = this.$modal.find(selectors.modalImage);
    this.$modalDescription = this.$modal.find(selectors.modalDescription);
    // Form wrapping permission button
    this.$modalPermissionForm = this.$modal.find(selectors.modalPermissionForm);
    this.$modalPermissionButton = this.$modalPermissionForm
      .find(selectors.modalPermissionButton)
      .fadeOut(0);
    this.$modalPrevArrow = this.$modal.find(selectors.prevArrow);
    this.$modalNextArrow = this.$modal.find(selectors.nextArrow);

    // User avatar preparation
    const { imageWrapper, hiddenGallerySlide } = selectors.avatar;
    this.$avatar = $(imageWrapper);
    this.$avatarSlide = this.$gallery.find(hiddenGallerySlide);

    // Initialize modal preparation
    preparePhotoModal({ modal, animateOnShown }).init();
  }

  _setUpEventListeners() {
    //Caching
    const $body = $('body');

    /**
     * Show modal with content based on the currently clicked photo
     * This event handler opens gallery
     */
    this.$gallery.click(event => {
      let target = event.target;

      if (target.tagName !== 'IMG') return;

      this._generateModal(target);
    });

    /**
     * Show avatar in gallery when avatar is clicked
     */
    this.$avatar.click(event => {
      this.$avatarSlide.click();
    });

    /**
     * Change currently shown photo when the photo is clicked
     * in the opened gallery
     */
    this.$modal.click(event => {
      // Show next photo when the photo is clicked
      let target = event.target;

      if (
        !$(target).hasClass(this.galleryConfig.arrowClass) &&
        target.tagName !== 'IMG'
      )
        return;

      let config = this.galleryConfig;

      // Change order
      if (target.tagName === 'IMG' || $(target).hasClass(config.nextClass)) {
        ++this.order;
      }

      if ($(target).hasClass(config.prevClass)) {
        --this.order;
      }

      this._updateGallery();
    });

    this.$modalPermissionForm.submit(event => {
      event.preventDefault();
      this._askPermission();
    });

    // Touch support for mobile devices
    this._addTouchSupport();

    /**
     * Manipulation of the gallery using arrows
     */
    this.$modal.on('keydown', event => {
      let key = event.key;

      if (key !== 'ArrowRight' && key !== 'ArrowLeft') return;

      // Change order
      if (key === 'ArrowRight') {
        ++this.order;
      } else {
        --this.order;
      }

      this._updateGallery();
    });
  }

  /**
   * Add support of the swipe for mobile devices
   *
   * When swipe is started:
   * Get the initial swipe coordinates
   *
   * When swipe occurs:
   * Save the current swipe coordinated
   *
   * When swipe is finished:
   * Event handler to handle finishing the swiping of the image
   * 1. calculate the distance of the swipe
   * 2. Compare swipe distance and minimum distance to swipe.
   * 3. Swipe to the right if it is not the last photo
   * 4. Swipe to the left if it is not the first photo
   */
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

      // Change order
      if (distance > this.touchTrottle) {
        // Don't swipe to the right if this is the last photo
        if (this.order === this.$slides.length) return;

        ++this.order;
      } else if (distance < -this.touchTrottle) {
        // Don't swipe to the left if this is the last photo
        if (this.order === 0) return;

        --this.order;
      }

      this._updateGallery();
    });
  }

  _updateGallery() {
    if (this.order === this.$photos.length) {
      --this.order;
      console.log('Preventing switching between photos');
      return;
    }
    // Get image based on the current order
    let newImage = this.$gallery.find(`img[data-order="${this.order}"]`)[0];

    // Update gallery with animation
    this._generateModal(newImage, true);
  }

  _generateModal(target, animation) {
    let { order, id } = target.dataset;

    if (animation) {
      // Animate appearance of the modal content
      this._animateModalContent(target);
    } else {
      // Show modal content without animation
      this._showModalContent(target);
    }

    this.$modal.focus();

    this.order = parseInt(order);
    this.id = id;

    // Handle arrow hiding on first/last photos
    this.order === 0 ? this._hidePrevArrow() : this._showPrevArrow();
    this.order === this.$slides.length - 1
      ? this._hideNextArrow()
      : this._showNextArrow();
  }

  /**
   * 1. Save request information
   * 2. Make request to get unique identifier
   * 3. Save it to local storage and pass to the chat via search params
   * 4. In case of errors, show error popup
   */
  _askPermission() {
    let { method, headers, endpoint } = this.requests.permission;

    this.makeRequest({ method, headers, endpoint })
      .then(response => {
        let { success, identifier } = response;

        if (!success) throw new Error('Somehting went wrong');

        localStorage.setItem('permissionRequest', identifier);

        window.location.assign(
          `${this.redirectForPermission}?sendMessage=true&type=permissionRequest&identifier=${identifier}`
        );
      })
      .catch(error => {
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }

  _animateModalContent(target) {
    let { description, privacy, src } = this._getPhotoInfo(target);

    // Animate photo disappearance
    this.$modalImage.fadeOut({
      duration: 400,
      queue: false,
      complete: () => {
        // Change src attribute of the photo
        this.$modalImage.attr('src', src);

        // Animate photo appearance
        this.$modalImage.fadeIn({
          duration: 400,
          queue: false,
        });

        if (privacy) {
          // Animate button appearance
          this.$modalPermissionButton.fadeIn({
            duration: 400,
            queue: false,
          });
        }
      },
    });

    // Animate photo description disappearance
    this.$modalDescription.fadeOut({
      duration: 400,
      queue: false,
      complete: () => {
        // Change description
        this._changeDescription(description, privacy);

        // Animate photo description appearance
        this.$modalDescription.fadeIn({
          duration: 400,
          queue: false,
        });
      },
    });

    if (!privacy) {
      // Animate button disappearance
      this.$modalPermissionButton.fadeOut({
        duration: 400,
        queue: false,
      });
    }
  }

  _showModalContent(target) {
    let { description, privacy, src } = this._getPhotoInfo(target);

    this.$modalImage.attr('src', src);

    this._changeDescription(description, privacy);

    privacy
      ? this.$modalPermissionButton.fadeIn(0)
      : this.$modalPermissionButton.fadeOut(0);
  }

  _changeDescription(description, privacy) {
    this.$modalDescription.text(description);
    this._alignDescriptionText(privacy);
  }

  _getPhotoInfo(target) {
    let { description, privacy } = target.dataset;
    let src = target.src;

    // Convert privacy into boolean
    privacy = privacy === 'true' ? true : false;

    return { description, privacy, src };
  }

  _alignDescriptionText(privacy) {
    privacy
      ? this.$modal.addClass('private')
      : this.$modal.removeClass('private');
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
