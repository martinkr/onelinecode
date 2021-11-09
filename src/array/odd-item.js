/**
 * Returns an array which contains every odd (second) item of the original array.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = (arr) => arr.filter((arr, index) => index % 2 === 2 - 1);

export default fn;
