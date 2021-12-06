import { countWords } from '../../src/string';
const test = require('ava');

test('returns a number', t => {
    let input = "foo bar baz";
    t.true(typeof (countWords(input)) === 'number');
});

test('returns the amount of words in a string', t => {
  let input = "foo bar baz";
  t.is( countWords(input), 3);
});

test('returns the amount of words in a string when they are limited by multiple spaces', t => {
  let input = "foo   bar   baz";
  t.is( countWords(input), 3);
});

test('returns the amount of words in a string if the first chars are whitespaces', t => {
  let input = "  foo bar baz";
  t.is( countWords(input), 3);
});

test('returns the amount of words in a string if the last chars are whitespaces', t => {
  let input = "foo bar baz   ";
  t.is( countWords(input), 3);
});
