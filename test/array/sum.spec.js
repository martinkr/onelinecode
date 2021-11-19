import { sum } from '../../src/array';
const test = require('ava');


test('returns a number', t => {
    let input = [1, 2, 3];
    let result = sum(input);
    t.true(typeof (result) === 'number');
});

test('returns the sum of all numerical items', t => {
    let input = [1, 2, 3];
    let expectation = 6;
    t.is(sum(input), expectation);
});

test('returns the sum of all numerical items even if here are negative items', t => {
    let input = [-2, -1, 0, 1, 2, 3];
    let expectation = 3;
    t.is(sum(input), expectation);
});
