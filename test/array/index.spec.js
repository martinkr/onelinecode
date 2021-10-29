import * as Array from '../../src/array';
const test = require('ava');

test('exports a function "(Array.)occurrenceMap"', t => {
    t.true(typeof (Array.occurrenceMap) === 'function')
});

test('exports a function "(Array.)isEmpty"', t => {
    t.true(typeof (Array.isEmpty) === 'function')
});

test('exports a function "(Array.)removeDuplicates"', t => {
    t.true(typeof (Array.removeDuplicates) === 'function')
});

test('exports a function "(Array.)shallowClone"', t => {
    t.true(typeof (Array.shallowClone) === 'function')
});

test('exports a function "(Array.)lowestNumber"', t => {
    t.true(typeof (Array.lowestNumber) === 'function')
});

test('exports a function "(Array.)highestNumber"', t => {
    t.true(typeof (Array.highestNumber) === 'function')
});
