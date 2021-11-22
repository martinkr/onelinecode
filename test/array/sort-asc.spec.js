import { sortAsc } from '../../src/array';
const test = require('ava');

let input;
test.beforeEach(t => {
    input = [4, 2, 1, 0, 3];
})

test('returns a new array array', t => {
    let arr = [1, 2, 3, 4];
    t.not(sortAsc(arr), arr);
});

test('returns a new array array sorted by ascending order', t => {
    let expectation = [0, 1, 2, 3, 4];
    t.deepEqual(sortAsc(input), expectation);
});
