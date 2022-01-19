/**
 * Returns the string with spaces convertes to tabs.
 * @param {String} str
 * @returns {String}
 */

const fn = (str, tabsize = 4) =>
  str.replace(new RegExp(` {${tabsize}}`, "g"), "\t");

export default fn;
