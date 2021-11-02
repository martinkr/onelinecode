/**
 * Returns an new array where the first entry is the "first" and the second entry is the "second" half or the original array.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = arr => [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];

export default fn;