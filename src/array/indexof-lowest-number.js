/**
 * Returns the index of the lowest numerical item of the array.
 * @param {Array} arr 
 * @returns {Number}
 */
const fn = arr => arr.reduce((acc, curr, index, a) => (curr < a[acc] ? index : acc), 0);

export default fn;