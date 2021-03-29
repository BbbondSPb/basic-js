const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if (date.getMonth() == 11 || date.getMonth() == 00 || date.getMonth() == 01) {
    return 'winter'
  } else  if (date.getMonth() == 02 || date.getMonth() == 03 || date.getMonth() == 04) {
    return 'spring'
  } else  if (date.getMonth() == 05 || date.getMonth() == 06 || date.getMonth() == 07) {
    return 'summer'
  } else  if (date.getMonth() == 08 || date.getMonth() == 09 || date.getMonth() == 10) {
    return 'autumn'
  }
};
