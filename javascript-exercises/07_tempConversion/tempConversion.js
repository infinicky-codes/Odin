const convertToCelsius = function(fahrenheitTemp) {
  // conversion formula
  let celciusTemp = (fahrenheitTemp - 32) * (5/9);
  
  // round to 1 decimal point if need be
  if (celciusTemp % 1 != 0) {
    //celciusTemp = Number.parseFloat(celciusTemp.toFixed(1));
    celciusTemp = Math.round(celciusTemp * 1e1) / 1e1;
  }

  return celciusTemp;
};

const convertToFahrenheit = function(celciusTemp) {
  // conversion formula
  let fahrenheitTemp = celciusTemp * 9/5 + 32;
  
  // round to 1 decimal point if need be
  if (fahrenheitTemp % 1 != 0) {
    fahrenheitTemp = Math.round(fahrenheitTemp * 1e1) / 1e1;
  }

  return fahrenheitTemp;
};

//console.log(convertToCelsius(400)) // fahrenheit to celsius, should return 0
//console.log(convertToFahrenheit(-10)) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
