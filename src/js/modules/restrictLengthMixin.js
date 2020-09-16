export default {
  restrictInputLength($form) {},

  init($form) {
    _getSelectionLength = _getSelectionLength.bind(this);
    _isNumericInput = _isNumericInput.bind(this);

    $form.on('keydown', event => {
      // Cache target
      let target = event.target,
        key = event.key;

      switch (key) {
        case 'Backspace':
        case 'Tab':
          return;
      }

      if (!_isNumericInput(key)) {
        event.preventDefault();
        return;
      }

      let { restrictlength, maxlength } = target.dataset;
      // Check whether we need to restrict length
      if (!restrictlength) return;

      // Allow selection
      let selectionLength = _getSelectionLength(target);
      if (selectionLength > 0) return;

      // Convert type to perform comparison
      maxlength = parseInt(maxlength);
      // If the field's value length is equals to max, prevent typing
      if (target.value.length === maxlength) event.preventDefault();
    });
  },
};

/**
 * Function checking whether the inputed key is numeric
 * @param {String} key - inputed letter
 */
function _isNumericInput(key) {
  let regex = /\D/;
  return !regex.test(key);
}

/**
 * Function getting the length of the selected text
 * @param {HTMLElement} target - element in which to get the selected area
 */
function _getSelectionLength(target) {
  if (window.getSelection) {
    try {
      let selection = target.value.substring(
        target.selectionStart,
        target.selectionEnd
      );
      return selection.length;
    } catch (e) {
      console.error(e);
    }
  }
}
