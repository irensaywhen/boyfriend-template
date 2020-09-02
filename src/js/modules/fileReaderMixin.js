// Here we'll make mixin and put functions on the global level
// but export only one of them

export default {
  initializeFileReader($photosForm) {
    // Bind context
    _setReaderEventListeners = _setReaderEventListeners.bind(this);
    _readFile = _readFile.bind(this);
    _loadfromInput = _loadfromInput.bind(this);
    _cacheElements = _cacheElements.bind(this);
    _setUpEventLiseners = _setUpEventLiseners.bind(this);

    // Perform caching and setting event listeners
    // Maybe there will be no need in caching function
    _cacheElements();
    _setUpEventLiseners();

    // Save passed arguments
    $form = $photosForm;
  },
};

// Private varialbes
let selectors, $form, classes;

// Private functions
/**
 * Function setting event listeners to all of the
 * @param {FileReader Object} reader - reader to set event listeners to
 */
function _setReaderEventListeners(reader) {
  reader.addEventListener('loadstart', event => {
    // Show loading indicator here
    console.log('Loading start');
    console.log(event);
  });

  reader.addEventListener('loadend', event => {
    //Delete progress indicator here
    console.log('Loading end');
    console.log(event);
  });

  reader.addEventListener('load', event => {
    console.log('load event');
    //_preview(event.target);
  });

  reader.addEventListener('error', event => {
    console.log('Error');
  });

  reader.addEventListener('abort', event => {
    console.log('Aborted');
  });
}

/**
 * Function to cache elements required for FileReader to work
 */
function _cacheElements() {
  selectors = this.selectors;
  classes = this.classes;
}

/**
 * Function to set initial event listeners to handle photo upload
 * and discard changes functionality
 */
function _setUpEventLiseners() {
  $form.on('change', event => {
    let target = event.target;

    // Stop execution if the target is not for photo upload
    if (!target.classList.hasClass(classes.input)) return;

    _loadfromInput(target);
  });
}

/**
 * Function to read file and start loading it
 * It instantiates a FileReader Object for the current file
 * Sets event listeners to listen to events on reader
 * And then, starts reading it to generate URL
 * @param {File Object} file
 */
function _readFile(file) {
  let reader = new FileReader();

  this._setReaderEventListeners(reader);
  reader.readAsDataURL(file);
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
    _readFile(file);
  }
}
