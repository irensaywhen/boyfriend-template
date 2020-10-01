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
    _loadfromInput = _loadfromInput.bind(this);
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
    ({ avatar, uploader } = this.configuration);

    // Perform preparations to handle photo upload
    _cacheElements();

    // Check for browser APIs that should be presented to handle
    // sending photos via FormData and getting it via FileReader
    isAjaxUpload = (function () {
      return 'FormData' in window && 'FileReader' in window;
    })();

    if (!isAjaxUpload) {
      // Let the user know that his browser is outdated
      _handleLegacyBrowsers();
    }

    // Detect whether to show camera capturing for mobile and tablet devices
    let isShowCameraCapturing = await helper.isShowCameraCapturing.call(helper);

    if (!isShowCameraCapturing) {
      // Hide mobile capturing as a precaution
      $photoUploadContainer.removeClass(classes.mobilePhotoUpload);

      // Check for browser APIs that should be presented to handle Drag'n'Drop
      isAdvancedUpload = (function () {
        let div = document.createElement('div');
        return (
          ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
          isAjaxUpload
        );
      })();
    } else {
      // Don't show drag'n'drop for mobile devices
      isAdvancedUpload = false;
      // Add photo capturing on mobile devices
      $photoUploadContainer.addClass(classes.mobilePhotoUpload);
    }

    if (isAjaxUpload) {
      // Assign fileReaderMixin to the prototype of the current class
      Object.assign(this.__proto__, fileReaderMixin);
      // Initializing File Reader handler
      this.initializeFileReader({ errorText });
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
    this._saveFile = this._saveFile.bind(this);
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
  // Start loading from input using FileReader
  this.$form.on('change', event => {
    let target = event.target;

    // Stop execution if the target is not for photo upload
    if (!target.classList.contains(classes.input)) return;

    // Load files for preview
    _loadfromInput(target);
  });

  // Hide loading indicator after transition
  this.$modal.on('transitionend', event => {
    let $target = $(event.target);

    if (!$target.hasClass('loadend')) return;
    // Remove progress indicator
    $target.closest(progressSelectors.fileProgressWrapper).remove();
    // Enable button
    $disableWhileLoad.attr('disabled', false);
  });

  if (!isAdvancedUpload) return;

  // Handler to save and preview dropped file
  $photoUploadContainer.on('drop', event => {
    droppedFiles = event.originalEvent.dataTransfer.files;

    if (droppedFiles.length === 0) return;

    if (avatar) {
      _saveAndPreviewFile(droppedFiles[0]);
    } else if (uploader) {
      console.log('We are in photo uploader!');
    }
  });
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
 * The function to load files from input.
 * It checks if there is at least one file,
 * and if so, start file loading
 * @param {DOMElement} input - input element from which all the files are loaded
 */
function _loadfromInput(input) {
  let files = input.files;
  if (!files[0]) return;

  for (let i = 0; i < files.length; i++) {
    _saveAndPreviewFile(files[i]);
  }
}

/**
 * Function saving the file for further upload
 * and initializing reading and previewing the file
 * @param {File Object} file - file to save and preview
 */
function _saveAndPreviewFile(file) {
  // Restrict allowed file types
  let isImage = helper.MIMETypeIsImage(file);

  if (!isImage) {
    _showError(errorText.wrongFileType);
    return;
  }

  // Disable buttons
  $disableWhileLoad.attr('disabled', true);
  // Save file to upload it in the future - this method is unique to each class using file upload
  this._saveFile(file);
  // Insert progress bar
  let $progressBar = _insertProgressBar({ fileName: file.name });
  // Read file and connect it with progress bar
  this._readFile({ file, $progressBar });
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
 * in the progress bar
 * @param {Number} loaded - amount of loaded bytes
 * @param {Number} total - amount of total bytes to load
 */
function _showProgress({ loaded, total, $progressBar }) {
  // Calculate progress
  let progress = Math.round((loaded / total) * 100);
  // Update progress
  $progressBar.css('width', `${progress}%`);
}
