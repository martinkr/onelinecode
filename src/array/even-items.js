/**
 * Returns an array which contains every even item of the original array.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = (arr, out = [], i) => { for (i = 0; i < arr.length; i = i + 2) out.push(arr[i]); return out; };


export default fn;
