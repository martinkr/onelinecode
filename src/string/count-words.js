/**
 * Returns the number of words at the given string
 * @param {String} str 
 * @returns {Number}
 */
const fn = str => str.trim().split(/\s+/g).length;

export default fn;