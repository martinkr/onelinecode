import { average } from '../../src/array';
const test = require('ava');


test('returns a number', t => {
    let input = [1, 2, 3];
    let result = average(input);
    t.true(typeof (result) === 'number');
});

test('returns the average of the sum of all numerical items', t => {
    let input = [1, 2, 3];
    let expectation = 2;
    t.is(average(input), expectation);
});

test('returns the average of the sum of all numerical items even if here are negative items', t => {
    let input = [-1, 0, 1, 2, 3];
    let expectation = 1;
    t.is(average(input), expectation);
});
