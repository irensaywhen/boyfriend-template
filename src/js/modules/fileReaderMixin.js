// Here we'll make mixin and put functions on the global level
// but export only one of them
import Handlebars from 'handlebars';

export default {
  initializeFileReader({ form, modal }) {
    // Bind context
    _setReaderEventListeners = _setReaderEventListeners.bind(this);
    _readFile = _readFile.bind(this);
    _loadfromInput = _loadfromInput.bind(this);
    _showProgress = _showProgress.bind(this);
    _prepareTemplate = _prepareTemplate.bind(this);
    _insertProgressBar = _insertProgressBar.bind(this);
    _cacheElements = _cacheElements.bind(this);
    _setUpEventLiseners = _setUpEventLiseners.bind(this);

    // Binding functions from the Class
    this._preview = this._preview.bind(this);

    // Save passed arguments
    [$form, $modal] = [form, modal];

    // Preparations to read file
    _cacheElements();
    _setUpEventLiseners();
  },
};

// Private varialbes
let selectors,
  fileRead,
  classes,
  $modal,
  $form,
  progressTemplate,
  $progressContainer,
  $progressBar;

// Private functions

/**
 * Function to cache elements required for FileReader to work
 */
function _cacheElements() {
  selectors = this.selectors;
  fileRead = selectors.fileRead;
  classes = this.classes;

  // Progress indicator
  $progressContainer = $modal.find(fileRead.progress);
  // Template
  progressTemplate = document.getElementById(fileRead.templateId);
}

/**
 * Function to set initial event listeners to handle photo upload
 * and discard changes functionality
 */
function _setUpEventLiseners() {
  $form.on('change', event => {
    let target = event.target;

    // Stop execution if the target is not for photo upload
    if (!target.classList.contains(classes.input)) return;

    _loadfromInput(target);
  });

  // Hide loading indicator after transition
  $modal.on('transitionend', event => {
    let $target = $(event.target);

    if (!$target.hasClass('loadend')) return;
    // Remove progress indicator
    $target.closest(fileRead.fileProgressWrapper).remove();
  });
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

  for (let file of files) {
    // For now leave it without filename
    let $progressBar = _insertProgressBar({ fileName: file.name });
    // Read file and connect it with the current
    _readFile({ file, $progressBar });
  }
}

/**
 * Function to read file and start loading it
 * It instantiates a FileReader Object for the current file
 * Sets event listeners to listen to events on reader
 * And then, starts reading it to generate URL
 * @param {File Object} file
 */
function _readFile({ file, $progressBar }) {
  let reader = new FileReader();
  // Save progress bar for the current reader
  reader.$progressBar = $progressBar;
  // Prepare reader fo reading file
  _setReaderEventListeners(reader);
  // Read file
  reader.readAsDataURL(file);
}

/**
 * Function copying template
 * and compiling it with provided filename
 * @param {String} fileName - name of the file being loaded
 */
function _prepareTemplate(fileName) {
  // Get template content
  let progress = progressTemplate.innerHTML;

  // Compile template with provided filename
  progress = Handlebars.compile(progress);
  progress = progress({ name: fileName });

  return progress;
}

/**
 * Function inserting progress bar
 * @param {String} fileName - name of the file being loaded
 */
function _insertProgressBar({ fileName }) {
  // Prepare template for insertion
  let template = _prepareTemplate(fileName);
  // Insert the template into the progress container
  $progressContainer.append(template);
  // Save progress bar
  $progressBar = $progressContainer.find(fileRead.progressBar);
  return $progressBar;
}

/**
 * Function showing progress of photo read
 * in the progress bar
 * @param {Number} loaded - amount of loaded bytes
 * @param {Number} total - amount of total bytes to load
 */
function _showProgress({ loaded, total }) {
  // Calculate progress
  let progress = Math.round((loaded / total) * 100);
  // Update progress
  $progressBar.css('width', `${progress}%`);
}

/**
 * Function setting event listeners to the current reader
 * @param {FileReader Object} reader - reader to set event listeners to
 */
function _setReaderEventListeners(reader) {
  reader.addEventListener('loadstart', event => {
    // Show progress indicator
    //$progress.show();
  });

  reader.addEventListener('progress', event => {
    _showProgress({ loaded: event.loaded, total: event.total });
  });

  reader.addEventListener('loadend', event => {
    let target = event.target;

    // Indicate that the file related to the current progress bar was loaded
    target.$progressBar.addClass('loadend');
  });

  reader.addEventListener('load', event => {
    let target = event.target;
    setTimeout(this._preview, 500, target);
    // Show submit button
    this.$modalFooter.show();
  });

  reader.addEventListener('preview', event => {});

  reader.addEventListener('error', event => {
    console.log('Error');
  });
}
