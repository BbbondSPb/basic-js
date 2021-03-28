const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
module.exports = function createDreamTeam(array) {
  str = '';
    for (let i = 0; i < array.length; i++) {
      if (typeof(array[i]) == 'string') {
        str = str + array[i][0].toUpperCase()
      } 
    };
    return str.split('').sort().join('')
};
