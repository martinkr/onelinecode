/**
 * Returns a new array which contains every n-th item of the original array.
 * @param {Array} arr 
 * @param {Number} pos, position to look for 
 * @returns {Array}
 */
const fn = (arr, pos) => Array.from({ length: ~~(arr.length / pos) }, (_, i) => arr[(i + 1) * pos - 1]);

export default fn;
