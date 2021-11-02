/**
 * Returns the longest string entry of the array
 * @param {Array} arr 
 * @returns {String}
 */
const fn = arr => arr.reduce((prev, curr) => prev.length > curr.length ? prev : curr);

export default fn;