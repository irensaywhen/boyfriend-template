import fileReaderMixin from './fileReaderMixin';
import dragNDropMixin from './photosDragnDropMixin';
import helper from './helper.js';
import Handlebars from 'handlebars';

export default {
  async initializePhotoUpload() {
    // Bind context
    _cacheElements = _cacheElements.bind(this);
    _setUpEventListeners = _setUpEventListeners.bind(this);
    _prepareTemplate = _prepareTemplate.bind(this);
    _insertProgressBar = _insertProgressBar.bind(this);
    _showProgress = _showProgress.bind(this);
    _generateRandomId = _generateRandomId.bind(this);
    _saveAndPreviewFile = _saveAndPreviewFile.bind(this);
    _handleLegacyBrowsers = _handleLegacyBrowsers.bind(this);
    _showError = _showError.bind(this);
    _hideError = _hideError.bind(this);

    // Cache
    selectors = this.selectors.photoUpload;
    errorText = this.errorText.photoUpload;
    classes = this.classes;
    progressSelectors = selectors.progress;

    // Save configuration
    ({ avatar, uploader, photoBonus } = this.configuration);

    _cacheElements();

    /**
     *  Check for browser support of FormData and FileReader
     *  FileReader is used to preview files,
     *  while FormData - to send data to server
     */
    isAjaxUpload = (function () {
      return 'FormData' in window && 'FileReader' in window;
    })();

    // Detect whether to show camera capturing for mobile and tablet devices
    let isShowCameraCapturing = await helper.isShowCameraCapturing.call(helper);

    /**
     * If we're dealing with mobile devices:
     * Don't show Drag'n'drop, and add icon of mobile photo upload
     * Else, check for support of drag'n'drop API
     */
    if (isShowCameraCapturing) {
      isAdvancedUpload = false;
      $photoUploadContainer.addClass(classes.mobilePhotoUpload);
    } else {
      $photoUploadContainer.removeClass(classes.mobilePhotoUpload);

      // Detect support of Drag'n'Drop
      isAdvancedUpload = (function () {
        let div = document.createElement('div');
        return (
          ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
          isAjaxUpload
        );
      })();
    }

    if (isAjaxUpload) {
      // Assign fileReaderMixin to the prototype of the current class
      Object.assign(this.__proto__, fileReaderMixin);

      // Initializing File Reader handler
      this.initializeFileReader({ errorText });
    } else {
      _handleLegacyBrowsers();
    }

    if (isAdvancedUpload) {
      // Change container visual appearance
      $photoUploadContainer.addClass(classes.dragNDrop);

      // Assign drag'n'drop methods to the prototype
      Object.assign(this.__proto__, dragNDropMixin);

      // Initialize drag'n'drop
      this.initializeDragNDrop({ $container: $photoUploadContainer });
    }

    _setUpEventListeners();

    // Binding functions from the Class
    this._preview = this._preview.bind(this);

    //------------
    // Change how avatar handles sending file to send it via base64 string
    if (this._saveFile) {
      this._saveFile = this._saveFile.bind(this);
    }
  },
  _showProgress,
  _showError,
  _hideError,
};

// Private variables
let selectors,
  errorText,
  avatar,
  uploader,
  classes,
  isAjaxUpload,
  isAdvancedUpload,
  progressSelectors,
  $progressContainer,
  $disableWhileLoad,
  $errorContainer,
  progressTemplate,
  $photoUploadContainer,
  photoBonus,
  droppedFiles = false;

/**Private functions */

/**
 * Helper function to cache elements:
 * progress container, progress template
 */
function _cacheElements() {
  // Buttons to disable while file is being read
  $disableWhileLoad = this.$modal.find(selectors.disableWhileLoad);

  // Containers
  // Progress
  $progressContainer = this.$modal.find(progressSelectors.progress);
  // Error
  this.$errorContainer = $errorContainer = this.$modal.find(
    selectors.errorContainer
  );
  // Photo upload
  $photoUploadContainer = this.$modal.find(selectors.uploadContainer);

  // Template
  progressTemplate = document.getElementById(progressSelectors.templateId);
}

/**
 * Helper function to set event listeners
 */
function _setUpEventListeners() {
  /**
   * Handling photo upload using file input:
   * 1. Save target of the change event and its FileList property value
   * 2. Don't do anything if it doesn't have files
   * 3. For each file in the file list, load it
   */
  this.$form.on('change', event => {
    let files = event.target.files;

    if (!files || !files[0]) return;

    for (let i = 0; i < files.length; i++) {
      _saveAndPreviewFile(files[i]);
    }
  });

  /**
   * Handling hiding loading indicator after the animation is ended
   * 1. Remove progress indicator
   * 2. Enable buttons that waere disabled while loading
   */
  this.$modal.on('transitionend', event => {
    let $target = $(event.target);

    if (!$target.hasClass('loadend')) return;

    $target.closest(progressSelectors.fileProgressWrapper).remove();
    $disableWhileLoad.attr('disabled', false);
  });

  if (!isAdvancedUpload) return;

  /**
   * Handle photo upload via Drag'n'Drop:
   * 1. Get the dropped files
   * 2. Save and preview only the first file in case of photo bonus and avatar
   * 3. Preview all the files in case of photo upload in profile
   */
  $photoUploadContainer.on('drop', event => {
    droppedFiles = event.originalEvent.dataTransfer.files;

    if (droppedFiles.length === 0) return;

    if (avatar || photoBonus) {
      _saveAndPreviewFile(droppedFiles[0]);

      if (photoBonus) this._discardChanges();
    } else if (uploader) {
      console.log('We are in photo uploader!');
    }
  });
}

/**
 * Function saving the file for further upload
 * and initializing reading and previewing the file:
 * 1. Allow only image files
 * 2. Disable buttons while uploading
 * 3. Call class-specific method to save file for further upload
 * 4. Show progress bar
 * 5. Start reading the file
 * @param {File Object} file - file to save and preview
 */
function _saveAndPreviewFile(file) {
  let isImage = helper.MIMETypeIsImage(file);

  if (!isImage) {
    _showError(errorText.wrongFileType);
    return;
  }

  // Prepare for file read
  $disableWhileLoad.attr('disabled', true);

  if (this._saveFile) {
    this._saveFile(file);
  }

  let $progressBar = _insertProgressBar({ fileName: file.name });

  // Read file
  this._readFile({ file, $progressBar });
}

/**
 * Function to notify the user that his browser is outdated
 * And it will not support file upload
 */
function _handleLegacyBrowsers() {
  $photoUploadContainer.hide();
  _showError(errorText.legacyBrowser);
}

/**
 * Function showing errors that are not handled via alerts in error container
 */
function _showError(errorMessage) {
  $errorContainer.text(errorMessage);
}

/**
 * Function hiding previously displayed error in the error container
 */
function _hideError() {
  $errorContainer.empty();
}

/**
 * Function copying template
 * and compiling it with provided filename
 * This function will be assigned to editor prototype,
 * but it is only for internal use of it in fileReader Mixin and photos Drag'n'Drop mixin
 * @param {String} fileName - name of the file being loaded
 */
function _prepareTemplate(fileName) {
  // Get template content
  let progress = progressTemplate.innerHTML,
    id = _generateRandomId();

  // Compile template with provided filename
  progress = Handlebars.compile(progress);
  progress = progress({ name: fileName, id });

  return { template: progress, id };
}

/**
 * Function to generate random number that can be used as id.
 * Here it will be used to pass it to the template for further reference
 */
function _generateRandomId() {
  return Math.round(Math.random() * 1000);
}

/**
 * Function inserting progress bar
 * @param {String} fileName - name of the file being loaded
 */
function _insertProgressBar({ fileName }) {
  // Prepare template for insertion
  let { template, id } = _prepareTemplate(fileName);

  // Insert the template into the progress container
  $progressContainer.append(template);

  // Save progress bar
  let $progressBar = $progressContainer.find(`#${id}`);

  return $progressBar;
}

/**
 * Function showing progress of photo read
 * 1. Calculate progress amount
 * 2. Update the visual indicator of the progress
 * @param {Number} loaded - amount of loaded bytes
 * @param {Number} total - amount of total bytes to load
 */
function _showProgress({ loaded, total, $progressBar }) {
  // Calculate progress
  let progress = Math.round((loaded / total) * 100);

  // Update progress
  $progressBar.css('width', `${progress}%`);
}
