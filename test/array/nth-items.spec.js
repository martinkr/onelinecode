import { nthItems } from '../../src/array';
const test = require('ava');

let input;
test.beforeEach(t => {
    input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
})

test('returns every item at n-th = 1', t => {
    let position = 1;
    let expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 2', t => {
    let position = 2;
    let expectation = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 3', t => {
    let position = 3;
    let expectation = [3, 6, 9, 12, 15, 18];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 4', t => {
    let position = 4;
    let expectation = [4, 8, 12, 16, 20];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 5', t => {
    let position = 5;
    let expectation = [5, 10, 15, 20];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 6', t => {
    let position = 6;
    let expectation = [6, 12, 18];
    t.deepEqual(nthItems(input, position), expectation);
});

test('returns every item at n-th = 7', t => {
    let position = 7;
    let expectation = [7, 14];
    t.deepEqual(nthItems(input, position), expectation);
});


test('returns every item at n-th = 8', t => {
    let position = 8;
    let expectation = [8, 16];
    t.deepEqual(nthItems(input, position), expectation);
});



test('returns every item at n-th = 9', t => {
    let position = 9;
    let expectation = [9, 18];
    t.deepEqual(nthItems(input, position), expectation);
});


test('returns every item at n-th = 10', t => {
    let position = 10;
    let expectation = [10, 20];
    t.deepEqual(nthItems(input, position), expectation);
});





