import { highestNumber } from '../../src/array';
const test = require('ava');


test('returns the biggest number of a collection of positive integers ', t => {
    let input = [1, 2, 3];
    let expectation = 3;
    t.is(highestNumber(input), expectation);
});

test('returns the biggest number of a collection of negative integers ', t => {
    let input = [-1, -2, -3];
    let expectation = -1;
    t.is(highestNumber(input), expectation);
});

test('returns the biggest number of a collection of positive and negative integers ', t => {
    let input = [1, 0, -1];
    let expectation = 1;
    t.is(highestNumber(input), expectation);
});


test('returns the biggest number of a collection of positive and negative floats', t => {
    let input = [2.5, 1.5, -1.5, -2.5];
    let expectation = 2.5;
    t.is(highestNumber(input), expectation);
});

test('returns the biggest number of a collection of positive and negative floats and integers', t => {
    let input = [2.5, 1, 0, -1.5, -2];
    let expectation = 2.5;
    t.is(highestNumber(input), expectation);
});

test('returns the number if there is only one number', t => {
    let input = [1];
    let expectation = 1;
    t.is(highestNumber(input), expectation);
});


