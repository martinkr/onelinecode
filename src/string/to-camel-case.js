/**
 * Returns a new string in camel case. Uses space, dot, underscore, dash as delimiter.
 * @param {String} str
 * @returns {String}
 */

//  str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ""));
const fn = (str) =>
  str.replace(/[\s\._-]+\w/g, (m) => m[m.length - 1].toUpperCase());

export default fn;
