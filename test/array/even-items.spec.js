import { evenItems } from '../../src/array';
const test = require('ava');


test('returns an array with the only item the array has only one item', t => {
    let input = ['foo'];
    let expectation = ['foo'];
    t.deepEqual(evenItems(input), expectation);
});

test('returns every first item of a string with an even number of items', t => {
    let input = ['foo', 'bar', 'baz', 'foobar'];
    let expectation = ['foo', 'baz'];
    t.deepEqual(evenItems(input), expectation);
});


test('returns every first item of a string with an uneven number of items', t => {
    let input = ['foo', 'bar', 'baz', 'foobar', 'barbaz'];
    let expectation = ['foo', 'baz', 'barbaz'];
    t.deepEqual(evenItems(input), expectation);
});
