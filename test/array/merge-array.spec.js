import { mergeArray } from '../../src/array';
const test = require('ava');


test('returns an array with all entries of the two sources', t => {
    let input1 = ['foo', 'bar', 0, true, false];
    let input2 = ['baz', 'foobar'];
    let expectation = ['foo', 'bar', 0, true, false, 'baz', 'foobar'];
    t.deepEqual(mergeArray(input1, input2), expectation);
});



test('returns an array with all entries of the two sources with all the duplicates', t => {
    let input1 = ['foo', 'bar', 0, true, false,];
    let input2 = ['baz', 'foobar', 0, true, false];
    let expectation = ['foo', 'bar', 0, true, false, 'baz', 'foobar', 0, true, false];
    t.deepEqual(mergeArray(input1, input2), expectation);
});
