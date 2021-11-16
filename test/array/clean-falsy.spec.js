import { cleanFalsy } from '../../src/array';
const test = require('ava');

test('returns a cleaned index by removing `empty strings`, `NaN`, `null`, `undefined` and 0 ', t => {
    let input = ['', 'foo', -1, 0, 5, [], {}, true, false, NaN, undefined, null];
    let expectation = ['foo', -1, 5, [], {}, true];
    t.deepEqual(cleanFalsy(input), expectation);
});





