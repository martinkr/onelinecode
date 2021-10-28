/**
 * Returns an object where the keys are the 
 * array entries and the values the number of their occurrences.
 * @param {Array} arr 
 * @returns {Object}
 */
const fn = arr => arr.reduce((acc, current) => (acc[current] = (acc[current] || 0) + 1, acc), {});

export default fn;