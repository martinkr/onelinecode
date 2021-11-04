/**
 * Returns the length of the longest string entry of an Array of strings.
 * @param {Array} arr 
 * @returns {Number}
 */
const fn = arr => Math.min(...arr.map((el) => el.length));

export default fn;
