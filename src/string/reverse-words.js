/**
 * Returns the string with all words are reversed
 * @param {String} str
 * @returns {String}
 */

const fn = (str) =>
  str
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
export default fn;
