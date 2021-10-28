/**
* Assumes that the given argument is an Array and checks if it has entries.
 * a boolean false if the array is not empty
 * a boolean true if the array is empty
 * @param {Array} arr 
 * @returns {Boolean|Error}
 */
// const fn = arr => Array.isArray(arr) ? !arr.length : new Error();
const fn = ({ length }) => length === 0;

export default fn;