/**
 * Returns a number representing the number of occurences of a specfic character in the string.
 * @param {String} str
 * @returns {number}
 */

const fn = (str, needle) => str.split(needle).length - 1;

export default fn;
