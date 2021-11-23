/**
 * Returns the average of the sum of all items in a numerical array. 
 * Beware of JavaScripts Automatic Type Conversion if your `Array` contains something else than `Numbers`.
 * @param {Array} arr 
 * @returns {Number}
 */

const fn = arr => arr.reduce((a, b) => a + b) / arr.length;

export default fn;
