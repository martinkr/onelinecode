/**
 * Returns the index of the first occurrence of the lowest numerical item of the array.
 * @param {Array} arr 
 * @returns {Number}
 */
const fn = arr => arr.indexOf(Math.min.apply(null, arr));

export default fn;