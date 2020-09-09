export default {
  initializeFileReader() {
    // Bind context
    _setReaderEventListeners = _setReaderEventListeners.bind(this);
    _readFile = _readFile.bind(this);
    _loadfromInput = _loadfromInput.bind(this);
  },
  _loadfromInput,
};

/** Private functions */

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
    //Save file to upload it in the future
    this._saveFile(file);
    // Insert progress bar
    let $progressBar = this._insertProgressBar({ fileName: file.name });
    // Read file and connect it with progress bar
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
 * Function setting event listeners to the current reader
 * @param {FileReader Object} reader - reader to set event listeners to
 */
function _setReaderEventListeners(reader) {
  reader.addEventListener('loadstart', event => {
    // Show progress indicator
    //$progress.show();
  });

  reader.addEventListener('progress', event => {
    // Show progress for the current reader
    this._showProgress({
      loaded: event.loaded,
      total: event.total,
      $progressBar: event.target.$progressBar,
    });
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

  reader.addEventListener('error', event => {
    console.log('Error');
  });
}
