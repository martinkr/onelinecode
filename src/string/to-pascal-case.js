/**
 * Returns a new string in pascal case. Uses space, dot, underscore, dash as delimiter.
 * @param {String} str
 * @returns {String}
 */

const fn = (str) =>
  str
    .replace(/[\s\._-]+\w/g, (m) => m[m.length - 1].toUpperCase())
    .replace(str.charAt(0), str.charAt(0).toUpperCase());

export default fn;
