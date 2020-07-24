export default {
  creditCardNumberValidation(value, element) {
    // remove all non digit characters
    value = value.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;
    // loop through values starting at the rightmost side
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 == 0;
  },

  creditCardExpirationValidation(value, element) {
    value = String(value);

    let now = new Date();

    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear() - 2000;

    // Retrieve month and year
    let [month, year] = value.match(/\d+/g);

    // Get rid of leading zero
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    return currentYear === year
      ? currentMonth < month
        ? true
        : false
      : currentYear > year
      ? false
      : true;
  },
};
