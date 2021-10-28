import { occurrenceMap } from './../../src/array';
const test = require('ava');

test('returns an object which contains the number of occurances for each array item', t => {
    const arr = [1, 2, null, undefined, 'foo', 'bar'];
    const expectation = {
        "1": 3,
        "2": 3,
        null: 3,
        undefined: 3,
        'foo': 3,
        'bar': 3
    };
    const input = arr.concat(arr).concat(arr);
    t.deepEqual(occurrenceMap(input), expectation);

});

