const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 let result = '';
    if (!options.separator) {
    options.separator = '+';
   };
   if (!options.additionSeparator) {
    options.additionSeparator = '|';
   };
   if (!options.additionRepeatTimes) {
    return ' '
   }; 
   if (!options.repeatTimes) {
    return ' '
   };
   for (let j = options.additionRepeatTimes; j > 0; j--) {
   result = result + str;
   for (let i = options.additionRepeatTimes; i > 0; i--) {
       if (i > 1) {
        result = result + options.addition + options.additionSeparator;
       } else {
        result = result + options.addition;
       }
   }
   if (j > 1) {
    result = result + options.separator 
   } 
 }
   return result
};
  
