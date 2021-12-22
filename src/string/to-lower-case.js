/**
 * Returns a new string in lower case. Uses spaces as delimiter.
 * @param {String} str
 * @returns {String}
 */

const fn = (str) =>
  str
    .split(" ")
    .map((m) => `${m.charAt(0).toLowerCase()}${m.slice(1)}`)
    .join(" ");

export default fn;
