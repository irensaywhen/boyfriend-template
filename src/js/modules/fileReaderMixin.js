export default (function () {
  let errorText;

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
    _setReaderEventListeners.call(this, reader);
    // Read file
    reader.readAsDataURL(file);
  }

  /**
   * Function setting event listeners to the current reader
   * @param {FileReader Object} reader - reader to set event listeners to
   */
  function _setReaderEventListeners(reader) {
    reader.addEventListener('loadstart', () => {
      this._hideError();
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

    reader.addEventListener('error', () => {
      this._showError(errorText.read);
    });
  }
  return {
    initializeFileReader(config) {
      // Save passed information
      ({ errorText } = config);

      // Bind context
      this.initializeFileReader = this.initializeFileReader.bind(this);
      this._readFile = this._readFile.bind(this);
    },
    _readFile,
  };
})();
