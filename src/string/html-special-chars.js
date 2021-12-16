/**
 * Returns a new string where all HTML special characters are converted to HTML entities.
 * Certain characters have special significance in HTML, and should be represented by HTML entities if they are to preserve their meanings.
 * @param {String} str
 * @returns {String}
 */

const fn = (str) =>
  str.replace(
    /[&"'<>]/g,
    (i) =>
      ({ "&": "&amp;", '"': "&quot;", "'": "&#039;", "<": "&lt;", ">": "&gt;" }[
        i
      ])
  );

export default fn;
