import { createRange } from '../../src/array';
const test = require('ava');


test('returns an array', t => {
  let from = 1;
  let to = 4;
  t.true(Array.isArray((createRange(from,to))));
});

test('returns an array in the given range', t => {
  let from = 1;
  let to = 4;
  let expectation = [1, 2, 3, 4];
  t.deepEqual( createRange(from,to) , expectation);
});

test('returns an array in the given range with negative numbers', t => {
  let from = -2;
  let to = 2;
  let expectation = [-2,-1,0,1,2];
  t.deepEqual( createRange(from,to) , expectation);
});

test('returns an array empty array if from is bigger than to', t => {
  let from = 3;
  let to = 1;
  let expectation = [];
  t.deepEqual( createRange(from,to) , expectation);
});