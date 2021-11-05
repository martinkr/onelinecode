/**
 * Returns the length of the longest string entry of an Array of strings.
 * @param {Array} arr 
 * @param {Number} arr 
 * @returns {Number}
 */
// const fn = arr => Math.min(...arr.map((el) => el.length));
const fn = (arr, curr = Infinity) => (arr.forEach(el => { if (el.length < curr) curr = el.length }), curr);

export default fn;
