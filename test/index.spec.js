import { arr } from '../src';
const test = require('ava');

test('exports a function "(arr.)occurrenceMap"', t => {
    t.true(typeof (arr.occurrenceMap) === 'function')
});

test('exports a function "(arr.)isEmpty"', t => {
    t.true(typeof (arr.isEmpty) === 'function')
});

test('exports a function "(arr.)removeDuplicates"', t => {
    t.true(typeof (arr.removeDuplicates) === 'function')
});

test('exports a function "(arr.)shallowClone"', t => {
    t.true(typeof (arr.shallowClone) === 'function')
});

test('exports a function "(arr.)lowestNumber"', t => {
    t.true(typeof (arr.lowestNumber) === 'function')
});

test('exports a function "(arr.)highestNumber"', t => {
    t.true(typeof (arr.highestNumber) === 'function')
});
