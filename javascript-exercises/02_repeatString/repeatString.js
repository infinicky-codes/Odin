const repeatString = function(string, int) {
  if (int < 0) {
    return 'ERROR';
  }
  let repeatedString = '';
  for (let i = 0; i < int; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
