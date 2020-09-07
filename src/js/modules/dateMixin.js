import moment from 'moment';

export default {
  // Public functions and methods

  // Function to validate year
  yearValidator(value, element) {
    // Check the validity of all three elements
    isDayAndMonthValid = _isDayAndMonthValid();
    isAgeValid = _isAgeValid();
    isYearFormatValid = _isYearFormatValid();

    if (!isDayAndMonthValid || !isAgeValid || !isYearFormatValid) {
      return false;
    }
    return true;
  },

  // Function to validate day depending on month
  dayValidator(value, element) {
    // Day is considered valid if the month is empty or there is such day in month
    let isMonthEmpty = _isMonthEmpty(),
      isYearEmpty = _isYearEmpty();

    // Check year format
    isYearFormatValid = _isYearFormatValid();

    // Don't validate day if either any field is empty of year format is incorrect
    if (isMonthEmpty || isYearEmpty || !isYearFormatValid) return true;

    return _isDayValid();
  },

  initializeDateInput() {
    // Bind context
    _cacheElements = _cacheElements.bind(this);
    _setUpEventListeners = _setUpEventListeners.bind(this);
    _calculateAge = _calculateAge.bind(this);
    _getBirthDate = _getBirthDate.bind(this);
    _setYearErrorMessage = _setYearErrorMessage.bind(this);
    _isDayEmpty = _isDayEmpty.bind(this);
    _isMonthEmpty = _isMonthEmpty.bind(this);
    _isYearEmpty = _isYearEmpty.bind(this);
    _isDayAndMonthValid = _isDayAndMonthValid.bind(this);
    _isAgeValid = _isAgeValid.bind(this);
    _isDayValid = _isDayValid.bind(this);
    _isYearFormatValid = _isYearFormatValid.bind(this);

    // Class functions
    this.yearValidator = this.yearValidator.bind(this);
    this.dayValidator = this.dayValidator.bind(this);

    // Prepare date validation
    _cacheElements();
    _setUpEventListeners();
  },
};

// Private variables
let $day,
  $month,
  $year,
  errorMessages,
  currentYearErrorMessage,
  selectors,
  isDayAndMonthValid,
  isAgeValid,
  isYearFormatValid,
  $document = $(document);

/** Private methods */

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

  $document.on('validator:yearIsInvalid', () => {
    _setYearErrorMessage();

    // Display error message
    $year
      .closest(selectors['input-wrapper'])
      .find(`${year}-error`)
      .text(currentYearErrorMessage);
  });

  // Validate year on day and month input
  this.$form.on('input', event => {
    let target = event.target;

    let isValidateDateOnInput = target.dataset.date === 'true' ? true : false,
      year = $year.val();

    // If year is empty or no date custom attribute specified
    if (!isValidateDateOnInput || !year) return;

    // Validate year
    this.validator.element(selectors.year);
  });

  // Validate day on year and month input
  this.$form.on('input', event => {
    let target = event.target;

    let isValidateDayOnInput = target.dataset.day === 'true' ? true : false,
      dayValue = $day.val();

    if (!isValidateDayOnInput || !dayValue) return;
    // Validate day
    this.validator.element(selectors.day);
  });
}

/**
 * Function checking validity of day and month fields
 */
function _isDayAndMonthValid() {
  // Check if the day and month are not empty
  let isDayEmpty = _isDayEmpty(),
    isMonthEmpty = _isMonthEmpty();

  return !isDayEmpty && !isMonthEmpty;
}

/**
 * Three functions checking whether the day/month/year input field is empty
 */
function _isDayEmpty() {
  return !Boolean($day.val());
}
function _isMonthEmpty() {
  return !Boolean($month.val());
}
function _isYearEmpty() {
  return !Boolean($year.val());
}

/**
 * Function checking if the person is older than 18
 */
function _isAgeValid() {
  let age = _calculateAge();

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

/**
 * Function checking if the user inputed either two-digit or four-digit year
 */
function _isYearFormatValid() {
  let year = Number($year.val());
  if (100 <= year && year <= 999) return false;
  return true;
}

/**
 * Function checking if the day exists in the currently selected month
 */
function _isDayValid() {
  let year = Number($year.val()),
    month = $month.val(),
    day = parseInt($day.val());

  let daysInMonth =
    year <= 99
      ? moment(`${year}-${month}`, 'YY-MM').daysInMonth()
      : moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();

  return day <= daysInMonth;
}

/**
 * Function selecting error message for the year field
 */
function _setYearErrorMessage() {
  if (!isDayAndMonthValid) {
    currentYearErrorMessage = errorMessages.emptyDayAndMonth;
  } else if (!isAgeValid) {
    currentYearErrorMessage = errorMessages.age;
  } else if (!isYearFormatValid) {
    currentYearErrorMessage = errorMessages.format;
  }
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
