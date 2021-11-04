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
test('exports a function "(Array.)closestNumber"', t => {
    t.true(typeof (Array.closestNumber) === 'function')
});

test('exports a function "(Array.)indexOfLowestNumber"', t => {
    t.true(typeof (Array.indexOfLowestNumber) === 'function')
});

test('exports a function "(Array.)indexOfHighestNumber"', t => {
    t.true(typeof (Array.indexOfHighestNumber) === 'function')
});

test('exports a function "(Array.)splitInHalf"', t => {
    t.true(typeof (Array.splitInHalf) === 'function')
});
test('exports a function "(Array.)longestString"', t => {
    t.true(typeof (Array.longestString) === 'function')
});

test('exports a function "(Array.)shortestString"', t => {
    t.true(typeof (Array.shortestString) === 'function')
});

test('exports a function "(Array.)shortestStringLength"', t => {
    t.true(typeof (Array.shortestStringLength) === 'function')
});
