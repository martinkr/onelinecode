/**
 * Returns an array which contains every odd (second) item of the original array.
 * @param {Array} arr 
 * @returns {Array}
 */
const fn = (arr, odds = [], i = 0) => { for (i = 0; i < arr.length; i++) (i & 1) && odds.push(arr[i]); return odds };


export default fn;
