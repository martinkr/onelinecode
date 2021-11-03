import { longestString } from '../../src/array';
const test = require('ava');


test('returns the only item if the array has only one item', t => {
    let input = ['foo'];
    let expectation = 'foo';
    t.is(longestString(input), expectation);
});

test('returns the longest string entry from the array', t => {
    let input = ['foo', 'bar', 'foobar'];
    let expectation = 'foobar';
    t.is(longestString(input), expectation);
});

test('returns the last longest string from the array entry if there area multiple woth the same size', t => {
    let input = ['foo', 'bar', 'f'];
    let expectation = 'bar';
    t.is(longestString(input), expectation);
});
