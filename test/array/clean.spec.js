import { clean } from '../../src/array';
const test = require('ava');

test('returns a cleaned index by removing `empty strings`, `NaN`, `null`, `undefined` ', t => {
    let input = ['', 'foo', -1, 0, 5, [], {}, true, false, NaN, undefined, null];
    let expectation = ['foo', -1, 0, 5, [], {}, true, false];
    t.deepEqual(clean(input), expectation);
});





