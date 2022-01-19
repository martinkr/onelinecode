/**
 * Returns the string truncated to the given amount of chars while preserving full words
 * @param {String} str
 * @returns {String}
 */

const fn = (str, chars, placeholder = "…") =>
  str.length < chars
    ? str
    : `${str.substr(
        0,
        str.substr(0, chars - placeholder.length).lastIndexOf(" ")
      )}${placeholder}`;

export default fn;
