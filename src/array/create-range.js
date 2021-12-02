/**
 * Returns a new array with numeric items in the given range.
 * @param {Number} from first value
 * @param {Number} to last value
 * @returns {Array}
 */
const fn = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

export default fn;