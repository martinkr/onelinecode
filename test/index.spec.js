import { array } from '../src';
const test = require('ava');

test('exports a function "(array.)occurrenceMap"', t => {
    t.true(typeof (array.occurrenceMap) === 'function')
});

test('exports a function "(array.)isEmpty"', t => {
    t.true(typeof (array.isEmpty) === 'function')
});

test('exports a function "(array.)removeDuplicates"', t => {
    t.true(typeof (array.removeDuplicates) === 'function')
});

test('exports a function "(array.)shallowClone"', t => {
    t.true(typeof (array.shallowClone) === 'function')
});

test('exports a function "(array.)lowestNumber"', t => {
    t.true(typeof (array.lowestNumber) === 'function')
});

test('exports a function "(array.)highestNumber"', t => {
    t.true(typeof (array.highestNumber) === 'function')
});
