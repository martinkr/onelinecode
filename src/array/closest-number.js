/**
 * Returns the numerical item closest to the given number.
 * @param {Array} arr 
 * @param {Number} number to look for
 * @returns {Number}
 */
const fn = (arr, number) => arr.reduce((acc, current) => (Math.abs(current - number) < Math.abs(acc - number) ? current : acc));

export default fn;