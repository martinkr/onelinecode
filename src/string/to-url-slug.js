/**
 * Returns the a new string as an URL slug.
 * Uses space, dot, underscore, dash as delimiters as well as punctation marks.
 * Leading and trailing "-" will be removes
 *
 * @param {String} str
 * @returns {String}
 */

const fn = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’\s]/g, "-")
    .replace(/[\-]{2,}/g, "-")
    .replace(/^[\-]/g, "")
    .replace(/[\-]$/g, "");

export default fn;
