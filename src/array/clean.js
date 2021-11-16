/**
 * Returns an array without `empty strings`, `NaN`, `null`, `undefined` items.
 * @param {Array} arr 
 * @returns {Array}
 */

const fn = arr => arr.filter(item => !!item || item === 0 || item === false);

export default fn;
