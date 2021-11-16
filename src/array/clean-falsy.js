/**
 * Returns an array without `empty strings`, `NaN`, `null`, `undefined`, false and 0 items.
 * @param {Array} arr 
 * @returns {Array}
 */

const fn = arr => arr.filter(Boolean);

export default fn;
