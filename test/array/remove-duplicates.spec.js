import { removeDuplicates } from './../../src/array';
const test = require('ava');

test('returns an array with unique values', t => {
    const expectation = [1, 2, null, undefined, 'foo', 'bar', [1, 2], { 'a': 'b' }];
    const input = expectation.concat(expectation).concat(expectation);
    t.deepEqual(removeDuplicates(input), expectation);
});


test('returns a copy of the array', t => {
    let input = [1, 2, 2, 3];
    let expectation = removeDuplicates(input);
    input.pop();
    t.notDeepEqual(removeDuplicates(input), expectation);
});


