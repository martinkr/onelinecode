/**
 * Returns the string with \r\n converted to <br/>
 * @param {String} str
 * @returns {String}
 */

const fn = (str) => str.replace(/\r?\n/g, "<br />");

export default fn;
