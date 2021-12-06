/**
 * Returns a new array with numeric items in the given range.
 * @param {Number} from first value
 * @param {Number} to last value
 * @returns {Array}
 */
const fn = (a, b, sign = Math.sign(b - a)) =>  Array(Math.abs(b - a + sign)).fill().map((_, i) => a + sign * i);

export default fn;