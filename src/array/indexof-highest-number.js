/**
 * Returns the first index of the highest numerical item of the array.
 * @param {Array} arr 
 * @returns {Number}
 */
// const fn = arr => arr.reduce((acc, curr, index, a) => (curr > a[acc] ? index : acc), 0);
const fn = arr => arr.indexOf(Math.max.apply(null, arr));

export default fn;