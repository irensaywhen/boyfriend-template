export default {
  creditCardNumberValidation(value) {
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

  creditCardExpirationValidation(value) {
    let countDigits = function (year) {
      let count = 0;
      if (year >= 1) ++count;

      while (year / 10 >= 1) {
        year /= 10;
        ++count;
      }

      return count;
    };
    value = String(value);

    let now = new Date();

    let currentMonth = now.getMonth() + 1;
    let currentYear = now.getFullYear();

    // Retrieve month and year
    let [month, year] = value.match(/\d+/g);

    //Get rid of leading zero
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    let yearDigits = countDigits(year);

    switch (yearDigits) {
      case 4:
        break;

      case 2:
        currentYear -= 2000;
        break;

      default:
        return false;
    }

    console.log("currentYear === year:");
    console.log(currentYear === year);
    console.log("currentMonth < month");
    console.log(currentMonth < month);
    console.log("currentYear > year");
    console.log(currentYear > year);

    return currentYear === year
      ? currentMonth < month
        ? true
        : false
      : currentYear > year
      ? false
      : true;
  },
};
