/**
 * Returns a new array which contains every n-th item of the original array.
 * @param {Array} arr 
 * @param {Number} pos, position to look for 
 * @returns {Array}
 */
const fn = (arr, pos) => arr.filter((arr, index) => index % pos === pos - 1);

export default fn;
