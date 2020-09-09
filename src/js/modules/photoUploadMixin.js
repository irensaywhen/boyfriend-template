import fileReaderMixin from './fileReaderMixin';
import Handlebars from 'handlebars';

const photoUploadMixin = {
  initializePhotoUpload({ form, modal }) {
    // Bind context
    _cacheElements = _cacheElements.bind(this);
    _setUpEventListeners = _setUpEventListeners.bind(this);
    _prepareTemplate = _prepareTemplate.bind(this);
    _insertProgressBar = _insertProgressBar.bind(this);
    _showProgress = _showProgress.bind(this);
    _generateRandomId = _generateRandomId.bind(this);

    // Cache
    selectors = this.selectors.photoUpload;
    classes = this.classes;
    progressSelectors = selectors.progress;

    Object.assign(this.__proto__, fileReaderMixin);

    // Perform preparations to handle photo upload
    _cacheElements();
    _setUpEventListeners();

    // Binding functions from the Class
    this._preview = this._preview.bind(this);
    this._saveFile = this._saveFile.bind(this);

    // Initializing other mixins
    this.initializeFileReader();
  },
  _prepareTemplate,
  _insertProgressBar,
  _showProgress,
};

// Private variables
let selectors,
  classes,
  progressSelectors,
  $progressContainer,
  $submitButton,
  progressTemplate;

/**Private functions */

/**
 * Helper function to cache elements:
 * progress container, progress template
 */
function _cacheElements() {
  // Progress indicator
  $progressContainer = this.$modal.find(progressSelectors.progress);
  // Submit button
  $submitButton = this.$form.find(selectors.submitButton);
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

    // Disable submit button
    $submitButton.attr('disabled', true);
    // Load files for preview
    this._loadfromInput(target);
  });

  // Hide loading indicator after transition
  this.$modal.on('transitionend', event => {
    let $target = $(event.target);

    if (!$target.hasClass('loadend')) return;
    // Remove progress indicator
    $target.closest(progressSelectors.fileProgressWrapper).remove();
    // Enable button
    $submitButton.attr('disabled', false);
  });
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

export default photoUploadMixin;
