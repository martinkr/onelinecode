import { isEmpty } from './../../src/array';
const test = require('ava');

test('returns true if the array is empty ', t => {
    t.true(isEmpty([]));
});

test('returns false if the array contains at least one item ', t => {
    t.false(isEmpty(['item']));
});

test('returns false if the array contains only item which is undefined', t => {
    t.false(isEmpty([undefined]));
});

test('returns false if the array contains only items which is undefined', t => {
    t.false(isEmpty([undefined, undefined]));
});

test('returns false if the array contains only item which is null', t => {
    t.false(isEmpty([null]));
});

test('returns false if the array contains only items which is null', t => {
    t.false(isEmpty([null, null]));
});


