import { shuffle } from '../../src/array';
const test = require('ava');

let input;
test.beforeEach(t => {
    input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
})

test('returns a new array array', t => {
    let result = shuffle(input);
    t.is(input, input);
});

test('returns a new array array with shuffled items', t => {
    let result = shuffle(input);
    t.not(input, result);
});
