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

test('exports a function "(arr.)closestNumber"', t => {
    t.true(typeof (arr.closestNumber) === 'function')
});

test('exports a function "(arr.)indexOfLowestNumber"', t => {
    t.true(typeof (arr.indexOfLowestNumber) === 'function')
});
test('exports a function "(arr.)indexOfHighestNumber"', t => {
    t.true(typeof (arr.indexOfHighestNumber) === 'function')
});

test('exports a function "(arr.)splitInHalf"', t => {
    t.true(typeof (arr.splitInHalf) === 'function')
});

test('exports a function "(arr.)longestString"', t => {
    t.true(typeof (arr.longestString) === 'function')
});

test('exports a function "(arr.)shortestString"', t => {
    t.true(typeof (arr.shortestString) === 'function')
});

test('exports a function "(arr.)shortestStringLength"', t => {
    t.true(typeof (arr.shortestStringLength) === 'function')
});

test('exports a function "(arr.)longestStringLength"', t => {
    t.true(typeof (arr.longestStringLength) === 'function')
});

test('exports a function "(arr.)oddItems"', t => {
    t.true(typeof (arr.oddItems) === 'function')
});

test('exports a function "(arr.)evenItems"', t => {
    t.true(typeof (arr.evenItems) === 'function')
});
