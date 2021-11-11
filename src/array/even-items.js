/**
 * Returns an array which contains every even item of the original array.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = arr => arr.filter((_, index) => index % 2 === 0);


export default fn;
