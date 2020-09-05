import Bonus from './bonus.js';
import PhotoAnimation from './photoAnimation.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';

export default class Photo extends Bonus {
  constructor(options) {
    super(options);

    // Save popups
    this.popups = options.popups;

    // Initiate animation for icon in popup
    this.animation = new PhotoAnimation(options.animation);

    // Prepare photo preview template
    this.photoTemplates = prepareTemplates(options.photoTemplates);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();
    // Cache reference
    let selectors = this.selectors;

    // Amount element
    this.$amount = this.$bonus.find(selectors.amount);

    /**
     * Photo upload and preview specific
     */
    // Modal for photo preview
    this.$modal = $(selectors.modal);
    //Closing button
    this.$closeButton = this.$modal.find(selectors.closeModalButton);
    // Find modal footer and hide it
    this.$modalFooter = this.$modal.find('.modal-footer').fadeOut(0);
    // Container to preview photos
    this.$previewContainer = this.$modal.find(selectors.previewContainer);
    // Photo inputs
    this.$photoInputs = this.$modal.find(selectors.input);
    // Form
    this.$form = this.$modal.find(selectors.form);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();
    // Cache document element
    let $document = $(document);

    this.$photoInputs.change(event => {
      // Delete previously loaded photo
      this.$previewContainer.empty();

      // Delete previously saved src
      this._discardPhotoInformation();
    });

    this.$photoInputs.change(event => {
      // When new photo is uploaded - preview it
      this._loadPhoto(event.target);
    });

    this.$form.submit(event => {
      // When the photo is sent by the user
      event.preventDefault();

      // Start using bonus
      this._sendPhoto();
    });

    this.$closeButton.click(() => {
      // Delete all the temporary changes if the user doesn't submit the form
      this.__discardChanges();
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
      console.log('Modal closed');
    });
  }

  _useBonus() {
    // In use bonus function we'll need to trigger modal opening programically
    // After usage approvement
    this.$modal.modal('show');
    console.log('Using photo bonus...');

    // Delete previou
    //this._discardPhotoInformation()
    // Here we need to ask the user to make a photo or upload it
    // And then send the message with it
    // Also, if the user discard photo changes, we need to add amount of bonuses available
    // Maybe, we can change the amount of bonuses available only if the user finishes the usage
    // As well as in the superlike usage
    // Change the amount of bonuses available
  }

  _sendPhoto() {
    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();
    // Save description to photoData object
    this._savePhotoDescription();
    // Prepare formData to send photo information to the server
    this.__generateFormData();
    // Generate event to send the photo to the user
    $(document).trigger('present:send', this.photoData, this.formData);
    // Close modal
    this.$closeButton.click();
    // Call alert here with custom animation for superlike icon
    this.fireSendAlert(this.popups.send);
  }

  __generateFormData() {
    // Cache
    let photoData = this.photoData;

    for (let item in photoData) {
      // Save photo information except src
      if (item === 'src') continue;
      this.formData.set(item, photoData[item]);
    }
  }

  _savePhotoDescription() {
    this.photoData['description'] = $(this.selectors.photoDescription).val();
  }

  _prepareBonusUsage() {
    console.log('Preparing photo bonus usage...');
    // Ask server about sending superlike
    // If the server will approve usage
    // Send it to the user

    // Temporary return true for debuggins purposes
    return true;
  }

  _loadPhoto(photoInput) {
    let files = photoInput.files;

    if (!files[0]) return;

    this._readFile(files[0]);
  }

  _readFile(file) {
    // Save the currently selected photo
    this.formData.set('photo', file);
    // Instantiate a FileReader instance to handle photo upload
    let reader = new FileReader();
    // Prepare event listeners to listen to photo upload events
    this._setReaderEventListeners(reader);
    // Start uploading photo
    reader.readAsDataURL(file);
  }

  _setReaderEventListeners(reader) {
    // Show loading indicator when the read has started
    reader.onloadstart = event => {
      // Set progress indicator here
      console.log('Loading start');
      console.log(event);
    };

    // Hide loading indicator when the read has finished
    reader.onloadend = event => {
      //Delete progress indicator here
      console.log('Loading end');
      console.log(event);
    };

    // Preview photos when it is readed successfully
    reader.onload = event => {
      // Cache
      let target = event.target,
        src = target.result;
      // Save src for preview
      this.photoData['src'] = src;
      // Preview photo in the preview container
      this._previewPhoto({ src });
      // Show submit button
      this.$modalFooter.fadeIn(0);
    };

    // Show error popup when an error occured while whoto loading
    reader.onerror = () => {
      // Get text information for error popup
      let { title, text } = this.popups.uploadError;
      // Show error popup
      this.showRequestResult({
        title,
        text,
        icon: 'error',
      });
    };
  }

  _previewPhoto(data) {
    // Prepare template for compilation
    let compiledPhotoTemplate = Handlebars.compile(this.photoTemplates.preview);
    // Set photo preview data in template
    compiledPhotoTemplate = compiledPhotoTemplate(data);
    // Append template
    this.$previewContainer.append(compiledPhotoTemplate);
  }

  __discardChanges() {
    // Delete preview
    this.$previewContainer.empty();
    // Hide modal footer
    this.$modalFooter.fadeOut(0);
    // Delete photo information
    this._discardPhotoInformation();
  }

  _discardPhotoInformation() {
    this.photoData = { type: 'photo' };
    this.formData = new FormData();
  }

  _decreaseBonusAmountAvailable() {
    super._decreaseBonusAmountAvailable();
    super._updateAmountOnMarkup();
  }
}
