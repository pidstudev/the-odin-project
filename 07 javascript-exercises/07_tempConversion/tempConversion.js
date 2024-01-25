const convertToCelsius = function(degrees) {
  celsius = (5 / 9) * (degrees - 32);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  farenheit = degrees * (9 / 5) + 32;
  return Math.round(farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

