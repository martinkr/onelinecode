/**
 * Returns a new Array which contains all the values of the two Arrays. Ensures that the new array contains only unique values.
 * @param {Array} a 
 * @param {Array} b 
 * @returns {Array}
 */
const fn = (a, b) => [...new Set([...a, ...b])];

export default fn;