/**
 * Returns the string with tabs converted to spaces
 * @param {String} str
 * @returns {String}
 */

const fn = (str, tabsize = 4) => str.replaceAll("\t", " ".repeat(tabsize));

export default fn;
