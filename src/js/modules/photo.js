import Bonus from './bonus.js';
import PhotoAnimation from './photoAnimation.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';
import photoUploadMixin from './photoUploadMixin';

export default class Photo extends Bonus {
  constructor(options) {
    super(options);

    // Bind context
    this._discardChanges = this._discardChanges.bind(this);

    this.configuration = { photoBonus: true };

    if (this.isUsedOnThisPage) {
      // Initiate animation for icon in popup
      this.animation = new PhotoAnimation(options.animation);
    }

    // Prepare photo preview template
    this.photoTemplates = prepareTemplates(options.photoTemplates);

    this._cacheElements();
    this._setUpEventListeners();

    /**
     * Prepare bonus for photo upload:
     * 1. Initialize photo upload (FileReader, photo preview, drag'n'drop)
     * 2. Initialize loading indicator
     */
    Object.assign(Photo.prototype, photoUploadMixin);
    this.initializePhotoUpload();
    this.initializeLoadingIndicators(this.$form);
  }

  _cacheElements() {
    super._cacheElements();

    let selectors = this.selectors;

    // Amount element
    this.$amount = this.$bonus.find(selectors.amount);

    // Photo upload and preview
    this.$modal = $(selectors.modal);
    this.$closeButton = this.$modal.find(selectors.closeModalButton);
    this.$modalFooter = this.$modal.find('.modal-footer').fadeOut(0);
    this.$previewContainer = this.$modal.find(selectors.previewContainer);
    this.$form = this.$modal.find(selectors.form);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();
    // Cache document element
    let $document = $(document);

    /**
     * When the photo input changes:
     * 1. Delete previous photo previews
     * 2. Delete information about previous photo
     * -------------------------------------------
     * What to add:
     * 3. Do the same stuff on drop
     */

    this.$modal.on('change', event => {
      if (!event.target.classList.contains(this.classes.input)) return;

      this._discardChanges();
    });

    /**
     * Handle photo submission from the photo upload modal:
     * 1. Make a request to the server to ask if the bonus can be used
     * 2. If the bonus can be used, start using it
     * 3. If success = false or an unexpected error occured, show error popup
     */
    this.$form.submit(event => {
      // When the photo is sent by the user
      event.preventDefault();

      // Here, instead of starting using the bonus, ask server
      this.makeRequest(this.requests.use)
        .then(response => {
          let { success, title, text } = response;

          if (success) {
            // Save description of the photo to the local storage
            localStorage.setItem(
              'photoDescription',
              $(this.selectors.photoDescription).val()
            );

            if (this.isUsedOnThisPage) {
              this._useBonus();
            } else {
              this._redirectToUseBonus(response);
            }
          } else {
            this.showRequestResult({ title, text, icon: 'error' });
          }
        })
        .catch(error => {
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    });

    $(document).on('bonus:startUsage', (event, { type }) => {
      if (type !== 'photo') return;

      this.$modal.modal('show');
    });

    this.$closeButton.click(() => {
      if (this.usingBonus) return;

      this._discardChanges();
    });

    $document.on('chat:photoSent', () => {
      this._discardChanges();
      this.usingBonus = false;
    });

    $document.on('photoModal:onBeforeOpen', (event, modal) => {
      // Start modal preparation
      this.animationPreparation = this.animation.prepareAnimation(modal);
    });

    $document.on('photoModal:onOpen', (event, modal) => {
      // Run animation
      this.animation.startAnimation();
    });

    $document.on('photoModal:onAfterClose', (event, modal) => {
      // Prepare animation for further use
    });
  }

  /**
   * 1. Delete previews
   * 2. Hide modal footer
   * 3. Delete saved photo information
   */
  _discardChanges() {
    // Delete preview
    this.$previewContainer.empty();

    // Hide modal footer
    this.$modalFooter.fadeOut(0);

    // Delete photo information
    localStorage.removeItem('photoDescription');
    localStorage.removeItem('photoSrc');
  }

  /**
   * 1. Change the amount of available bonuses on markup
   * 2. Save photo description to show it in the chat
   * 3. Prepare formData object to send photo and description to the server
   * 4. Close modal
   * 5. Show bonus animation
   */
  _useBonus(type = this.type) {
    if (type !== this.type) return;

    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();
    this._updateAmountOnMarkup();

    this.usingBonus = true;
    // Generate event to send the photo to the user
    $(document).trigger('present:send', { type: 'photo' });

    // Close modal
    this.$closeButton.click();

    // Call alert here with custom animation for photo icon
    this.fireSendAlert(this.popups.send);
  }

  /**----------------------------------------------------
  /* Functions specific to classes utilizing PhotoUploadMixin
  /* ----------------------------------------------------*/

  /**
   * Handles class-specific functionality required for preview
   * 1. Get the src from the filereader
   * 2. Save src for further usage in chat
   * 3. Compile template for photo preview
   * 4. Append template to the preview container
   * @param {FileReader Object} fileReader - the resulting fileReader object
   * to preview loaded photo
   */
  _preview(fileReader) {
    let src = fileReader.result;

    // Save src to localStorage to send it to the server in the future
    localStorage.setItem('photoSrc', src);

    let compiledPhotoTemplate = Handlebars.compile(this.photoTemplates.preview);
    compiledPhotoTemplate = compiledPhotoTemplate({ src });

    // Append template
    this.$previewContainer.append(compiledPhotoTemplate);
  }
}
