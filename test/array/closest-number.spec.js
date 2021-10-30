import { closestNumber } from '../../src/array';
const test = require('ava');


test('returns the closest number of a collection of positive integers if it is a direct match ', t => {
    let input = [1, 2, 3, 5, 6, 7];
    t.is(closestNumber(input, 2), 2);
});

test('returns the lowest number of a collection of positive integers if it out of bounds (left)', t => {
    let input = [1, 2, 3, 5, 6, 7];
    t.is(closestNumber(input, 0), 1);
});

test('returns the highest number of a collection of positive integers if it out of bounds (right)', t => {
    let input = [1, 2, 3, 5, 6, 7];
    t.is(closestNumber(input, 9), 7);
});

test('returns the lower number of a collection of positive integers if it is not a direct match ', t => {
    let input = [1, 2, 3, 5, 6, 7];
    t.is(closestNumber(input, 4), 3);
});

test('returns the number of a collection of floats if it is a direct match', t => {
    let input = [1.2, 2.3, 3.4, 5.5, 6, 7];
    t.is(closestNumber(input, 1.2), 1.2);
});
test('returns the closest number of a collection of floats', t => {
    let input = [1.2, 2.3, 3.4, 5.5, 6, 7];
    t.is(closestNumber(input, 2.9), 3.4);
});


test('returns the number of a collection of gegative integers if it is a direct match', t => {
    let input = [-1, -2, -3, -5, -6];
    t.is(closestNumber(input, -2), -2);
});
test('returns the closest number of a negative integers', t => {
    let input = [-1, -2, -3, -5, -6];
    t.is(closestNumber(input, -4), -3);
});
