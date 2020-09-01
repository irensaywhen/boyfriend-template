import moment from 'moment';

export default (function () {
  // Private functions and methods
  let $day, $month, $year, day, month, year, selectors;

  /**
   * Helper function to cache elements required for validation
   */
  function _cacheElements() {
    selectors = this.selectors.date;

    $day = this.$form.find(selectors.day);
    $month = this.$form.find(selectors.month);
    $year = this.$form.find(selectors.year);
  }

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
    let { day, month, year } = _getBirthDate(),
      now = moment();

    let birth = moment({ year, month, day });

    // Return age
    return now.diff(birth, 'years');
  }

  return {
    // Public functions and methods
    frontendDateValidator(value, element) {
      let age = _calculateAge();

      if (age >= 18) {
        return true;
      } else {
        return false;
      }
    },

    initializeDateInput() {
      // Binding context
      _cacheElements = _cacheElements.bind(this);
      _calculateAge = _calculateAge.bind(this);
      _getBirthDate = _getBirthDate.bind(this);

      // Prepare date validation
      _cacheElements();
    },
  };
})();
