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

test('returns the amount of words in a string if the there are regular punctation marks and whitespaces', t => {
  let input = "~ …  ;,. ! ? [foo1] foo2 foo3-bar3 baz2  – — · / ( ) { } [ ] \" ' : ’ baz1";
  t.is( countWords(input), 5);
});

test('returns the amount of words in a string if they are surounded by spaces', t => {
  let input = "foo bar baz – — · / ( ) { } [ ] ~ … . , ; ! ? ' : ’ \" foobar [foo] ";
  t.is( countWords(input), 5);
});
