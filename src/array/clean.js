/**
 * Returns an array without `empty strings`, `NaN`, `null`, `undefined` items.
 * @param {Array} arr 
 * @returns {Array}
 */

const fn = arr => arr.filter(item => typeof (item) == 'boolean' || (typeof (item) === 'number' && isNaN(item) === false) ? true : !!item);

export default fn;
