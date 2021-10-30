import { indexOfLowestNumber } from '../../src/array';
const test = require('ava');

test('returns the first index of the lowest number of an array of integers', t => {
    let input = [1, 1, 2, 3];
    let expectation = 0;
    t.is(indexOfLowestNumber(input), expectation);
});

test('returns the first index of the lowest number of an array if it is a negative integer', t => {
    let input = [2, -1, 0, 3];
    let expectation = 1;
    t.is(indexOfLowestNumber(input), expectation);
});

test('returns the first index of the lowest number of an array if it is an array of float', t => {
    let input = [1.25, 1.21, 1.24];
    let expectation = 1;
    t.is(indexOfLowestNumber(input), expectation);
});




