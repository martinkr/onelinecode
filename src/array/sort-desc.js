/**
 * Returns a new array sorted by descending order (Numbers).
 * Beware of JavaScript's Automatic Type Conversion if your `Array` contains something else than `Numbers`.
 * @param {Array} arr 
 * @returns {Array}
 */

const fn = arr => [...arr].sort((a, b) => b - a);

export default fn;
