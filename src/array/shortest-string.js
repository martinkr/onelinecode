/**
 * Returns the shortest string entry of an Array of strings.
 * @param {Array} arr 
 * @returns {String}
 */
const fn = arr => arr.reduce((prev, curr) => prev.length < curr.length ? prev : curr);

export default fn;