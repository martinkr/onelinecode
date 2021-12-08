/**
 * Returns the number of words at the given string
 * @param {String} str
 * @returns {Number}
 */
// const fn = str => str.trim().split(/\W+/g).length;
// const fn = (str) => str.replace(/\s\W+\s/g, " ").trim().split(/\W+/g).length;
const fn = (str) =>
  str
    .trim()
    .split(/\s+/g)
    .map((i) => i.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’]/g, ""))
    .filter((i) => i).length;

export default fn;
