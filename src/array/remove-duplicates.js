/**
 * Assumes that the given argument is an Array and removes duplicate entries.
 * Preserves the order of the entries.
 * Returns a copy of the array.
 * @param {Array} arr 
 * @returns {Array}
 */
// const fn = arr => Array.isArray(arr) ? !arr.length : new Error();
const fn = arr => [...new Set(arr)];

export default fn;