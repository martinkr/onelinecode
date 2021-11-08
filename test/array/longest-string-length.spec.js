import { longestStringLength } from '../../src/array';
const test = require('ava');


test('returns a number', t => {
    let input = ['foo', 'bar', 'foobar'];
    let result = longestStringLength(input);
    t.true(typeof (result) === 'number');
});

test('returns the only item if the array has only one item', t => {
    let input = ['foo'];
    let expectation = 3;
    t.is(longestStringLength(input), expectation);
});

test('returns the shortest string entry from the array', t => {
    let input = ['foo', 'bar', 'foobar', 'f'];
    let expectation = 6;
    t.is(longestStringLength(input), expectation);
});
