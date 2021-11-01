import { splitInHalf } from './../../src/array';
const test = require('ava');

test('splits an array in half', t => {
    let input = [1, 2, 3, 4];
    let expectation = [[1, 2], [3, 4]];
    t.deepEqual(splitInHalf(input), expectation);
});
test('splits an array in half with the first half is bigger if it is an odd numberof entries', t => {
    let input = [1, 2, 3, 4, 5];
    let expectation = [[1, 2, 3], [4, 5]];
    t.deepEqual(splitInHalf(input), expectation);
});

