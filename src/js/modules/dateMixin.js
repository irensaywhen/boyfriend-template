import moment from 'moment';

export default (function () {
  // Private functions and methods
  let $day,
    $month,
    $year,
    errorMessages,
    currentErrorMessage,
    selectors,
    isDayAndMonthValid,
    isAgeValid;

  /**
   * Helper function to cache elements required for validation
   */
  function _cacheElements() {
    // Cache
    selectors = this.selectors.date;
    errorMessages = this.errorMessages.year;

    // Save input wrapper selector
    selectors['input-wrapper'] = this.selectors['input-wrapper'];

    $day = this.$form.find(selectors.day);
    $month = this.$form.find(selectors.month);
    $year = this.$form.find(selectors.year);
  }

  /**
   * Helper function to listen to validator events
   * and handle error messages changing
   */
  function _setUpEventListeners() {
    let year = selectors.year;

    $(document).on('validator:yearIsInvalid', () => {
      _setYearErrorMessage();

      // Display error message
      $year
        .closest(selectors['input-wrapper'])
        .find(`${year}-error`)
        .text(currentErrorMessage);
    });

    this.$form.on('input', event => {
      let target = event.target;

      let date = target.dataset.date,
        year = $year.val();

      // If year is empty or not date custom attribute specified
      if (!date || !year) return;

      // Validate year
      this.validator.element(selectors.year);
    });
  }

  /**
   * Function checking validity of day and month fields
   */
  function _isDayAndMonthValid() {
    // Check if the day and month are not empty
    let isDayValid = $day.val() ? true : false,
      isMonthValid = $month.val() ? true : false;

    return isDayValid && isMonthValid;
  }

  function _isAgeValid() {
    let age = _calculateAge();

    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function selecting error message for the year field
   */
  function _setYearErrorMessage() {
    currentErrorMessage = isDayAndMonthValid
      ? errorMessages.age
      : errorMessages.emptyDayAndMonth;
  }

  /**
   * Function collection birth date from the form fields
   */
  function _getBirthDate() {
    // Get the inputed values
    let day = $day.val(),
      month = $month.val(),
      year = $year.val();

    // Convert its type to number
    [day, month, year] = [day, month, year].map(item => parseInt(item));

    return { day, month, year };
  }

  /**
   * Helper function to calculate age of the person based on the current date
   * and information provided in the form
   */
  function _calculateAge() {
    let { day, month, year } = _getBirthDate();

    let birth = moment({ year, month, day }),
      now = moment();

    // Return age
    return now.diff(birth, 'years');
  }

  return {
    // Public functions and methods
    dateValidator(value, element) {
      // Check the validity of all three elements
      isDayAndMonthValid = _isDayAndMonthValid();
      isAgeValid = _isAgeValid();

      if (!isDayAndMonthValid || !isAgeValid) {
        return false;
      }
      return true;
    },

    initializeDateInput() {
      // Bind context
      _cacheElements = _cacheElements.bind(this);
      _setUpEventListeners = _setUpEventListeners.bind(this);
      _calculateAge = _calculateAge.bind(this);
      _getBirthDate = _getBirthDate.bind(this);
      _setYearErrorMessage = _setYearErrorMessage.bind(this);
      _isDayAndMonthValid = _isDayAndMonthValid.bind(this);
      _isAgeValid = _isAgeValid.bind(this);
      this.dateValidator = this.dateValidator.bind(this);

      // Prepare date validation
      _cacheElements();
      _setUpEventListeners();
    },
  };
})();
