import { sortDesc } from '../../src/array';
const test = require('ava');

let input;
test.beforeEach(t => {
    input = [4, 2, 1, 0, 3];
})

test('returns a new array array', t => {
    let arr = [4, 3, 2, 1, 0];
    t.not(sortDesc(arr), arr);
});

test('returns a new array array sorted by ascending order', t => {
    let expectation = [4, 3, 2, 1, 0];
    t.deepEqual(sortDesc(input), expectation);
});
