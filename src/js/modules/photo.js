import Bonus from './bonus.js';
import PhotoAnimation from './photoAnimation.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';
import photoUploadMixin from './photoUploadMixin';

export default class Photo extends Bonus {
  constructor(options) {
    super(options);

    this.configuration = { photoBonus: true };
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

  _sendPhoto() {
    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();
    this._updateAmountOnMarkup();
    // Save description to photoData object
    this._savePhotoDescription();
    // Prepare formData to send photo information to the server
    this._generateFormData();
    // Generate event to send the photo to the user
    $(document).trigger('present:send', this.photoData, this.formData);
    // Close modal
    this.$closeButton.click();
    // Call alert here with custom animation for photo icon
    this.fireSendAlert(this.popups.send);
  }

  _generateFormData() {
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
    // Ask server about sending superlike
    // If the server will approve usage
    // Send it to the user

    // Temporary return true for debuggins purposes
    return true;
  }

  /**
   * Function specific to classes using FileReader Mixin.
   * It handles class-specific functionality required for preview
   * Here, it saves src and sets the loaded photo in preview container
   * @param {FileReader Object} fileReader - the resulting fileReader object
   * to preview loaded photo
   */
  _preview(fileReader) {
    // cache
    //let src = fileReader.result;
    //// update preview
    //this.$avatarPreview.attr('src', src);
    //// save src to update markup
    //this.newAvatarLink = src;
    console.log('Previewing...');
  }

  /**
   * Function specific to classes using FileReader Mixin.
   * It saves file to allow futher upload in case of submitting the form
   * @param {File Object} file - reference to the file in the system
   */
  _saveFile(file) {
    //this.avatar = file;
    console.log('Saving file...');
  }

  //----------------------------------------------------------

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
    };

    // Hide loading indicator when the read has finished
    reader.onloadend = event => {
      //Delete progress indicator here
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

  _discardChanges() {
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
}
