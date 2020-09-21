import Bonus from './bonus.js';
import PhotoAnimation from './photoAnimation.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';
import photoUploadMixin from './photoUploadMixin';

export default class Photo extends Bonus {
  // Uploaded photo information to show it in the chat
  photoData = { type: 'photo' };

  // Uploaded photo information to send it to the server
  formData = new FormData();

  constructor(options) {
    super(options);

    // Bind context
    this._discardChanges = this._discardChanges.bind(this);

    this.configuration = { photoBonus: true };

    // Save popups
    this.popups = options.popups;

    // Initiate animation for icon in popup
    this.animation = new PhotoAnimation(options.animation);

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
    this.$photoInputs = this.$modal.find(selectors.input);
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
     * 1. Change the amount of available bonuses on markup
     * 2. Save photo description to show it in the chat
     * 3. Prepare formData object to send photo and description to the server
     * 4. Close modal
     * 5. Show bonus animation
     * -----------------------------------------------
     * Maybe, before changing amount of bonuses on the markup,
     * We need to ensure that the server recieved the usage information
     */
    this.$form.submit(event => {
      // When the photo is sent by the user
      event.preventDefault();

      // Change the amount of bonuses available
      this._decreaseBonusAmountAvailable();
      this._updateAmountOnMarkup();

      // Save description to photoData object
      this.photoData['description'] = $(this.selectors.photoDescription).val();

      // Prepare formData to send photo information to the server
      this._generateFormData();

      // Generate event to send the photo to the user
      $(document).trigger('present:send', this.photoData, this.formData);

      // Close modal
      this.$closeButton.click();

      // Call alert here with custom animation for photo icon
      this.fireSendAlert(this.popups.send);
    });

    this.$closeButton.click(() => {
      this._discardChanges();
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
    this.photoData = { type: 'photo' };
    this.formData = new FormData();
  }

  _useBonus() {
    // In use bonus function we'll need to trigger modal opening programically
    // After usage approvement
    this.$modal.modal('show');

    // Delete previou
    //this._discardPhotoInformation()
    // Here we need to ask the user to make a photo or upload it
    // And then send the message with it
    // Also, if the user discard photo changes, we need to add amount of bonuses available
    // Maybe, we can change the amount of bonuses available only if the user finishes the usage
    // As well as in the superlike usage
    // Change the amount of bonuses available
  }

  _generateFormData() {
    // Cache
    let photoData = this.photoData;

    for (let item in photoData) {
      // Save photo information except src
      if (item === 'src') continue;
      this.formData.append(item, photoData[item]);
    }
  }

  _prepareBonusUsage() {
    // Ask server about sending superlike
    // If the server will approve usage
    // Send it to the user

    // Temporary return true for debuggins purposes
    return true;
  }

  //----------------------------------------------------
  // Functions specific to classes utilizing PhotoUploadMixin
  //----------------------------------------------------

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

    this.photoData['src'] = src;

    let compiledPhotoTemplate = Handlebars.compile(this.photoTemplates.preview);
    compiledPhotoTemplate = compiledPhotoTemplate({ src });

    // Append template
    this.$previewContainer.append(compiledPhotoTemplate);
  }

  /**
   * It saves file to allow futher upload in case of submitting the form
   * @param {File Object} file - reference to the file in the system
   */
  _saveFile(file) {
    this.formData.append('photo', file);
  }
}
