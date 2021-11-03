import { shortestString } from '../../src/array';
const test = require('ava');


test('returns the only item if the array has only one item', t => {
    let input = ['foo'];
    let expectation = 'foo';
    t.is(shortestString(input), expectation);
});

test('returns the shortest string entry from the array', t => {
    let input = ['foo', 'bar', 'foobar', 'f'];
    let expectation = 'f';
    t.is(shortestString(input), expectation);
});

test('returns the last shortest string from the array entry if there area multiple woth the same size', t => {
    let input = ['foo', 'bar', 'foobar'];
    let expectation = 'bar';
    t.is(shortestString(input), expectation);
});
