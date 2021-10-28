/**
 * Creates a shallow-copied clone of the provided array. 
 * Since it's a shallow copy, nested objects or arrays 
 * will be copied by reference, not duplicated.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = arr => arr.slice(0);

export default fn;