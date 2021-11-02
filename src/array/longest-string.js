/**
 * Returns the longest string entry of the array
 * @param {Array} arr 
 * @returns {String}
 */
const fn = arr => arr => Math.max(...arr.map((el) => el.length));

export default fn;