const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
     if (typeof(array) == 'object') {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '--discard-next') {
           i++;
        } else if (array[i] == '--discard-prev') {
            if (myArray.length >= 1) {
                myArray.pop();
            }
        } else if (array[i] == '--double-next') {
            if (array[i + 1]) {
                myArray.push(array[i + 1]);
            }
        } else if (array[i] == '--double-prev') {
            if (myArray.length >= 1) {
                myArray.push(array[i - 1]);
            }
        } else {
            myArray.push(array[i]);
        }
    }
    return myArray
} else {
    return 'Error'
}
};
