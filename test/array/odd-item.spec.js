import { oddItem } from '../../src/array';
const test = require('ava');


test('returns en empty array it the array has only one item', t => {
    let input = ['foo'];
    let expectation = [];
    t.deepEqual(oddItem(input), expectation);
});

test('returns every second item of a string with an even number of items', t => {
    let input = ['foo', 'bar', 'baz', 'foobar'];
    let expectation = ['bar', 'foobar'];
    t.deepEqual(oddItem(input), expectation);
});


test('returns every second item of a string with an uneven number of items', t => {
    let input = ['foo', 'bar', 'baz', 'foobar', 'barbaz'];
    let expectation = ['bar', 'foobar'];
    t.deepEqual(oddItem(input), expectation);
});
