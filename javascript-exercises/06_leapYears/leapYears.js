const leapYears = function(year) {
  let isLeapYear = false;

  // Leap years are years divisible by four,
  if (year % 4 === 0) {
    isLeapYear = true;
  }
  // unless divisible by 100 and not by 400
  if (year % 100 === 0 && year % 400 != 0) {
      isLeapYear = false;
  }

  return isLeapYear;
};

//console.log(leapYears(2000)); // is a leap year: returns true
//console.log(leapYears(1985)); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
