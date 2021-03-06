import * as str from "../../src/string";
const test = require("ava");

test('exports a function "(str.)countWords"', (t) => {
  t.true(typeof str.countWords === "function");
});

test('exports a function "(str.)capitalise"', (t) => {
  t.true(typeof str.capitalise === "function");
});

test('exports a function "(str.)toCamelCase"', (t) => {
  t.true(typeof str.toCamelCase === "function");
});

test('exports a function "(str.)toPascalCase"', (t) => {
  t.true(typeof str.toPascalCase === "function");
});

test('exports a function "(str.)toURLSlug"', (t) => {
  t.true(typeof str.toURLSlug === "function");
});

test('exports a function "(str.)htmlSpecialChars"', (t) => {
  t.true(typeof str.htmlSpecialChars === "function");
});

test('exports a function "(str.)toLowerCase"', (t) => {
  t.true(typeof str.toLowerCase === "function");
});

test('exports a function "(str.)countChar"', (t) => {
  t.true(typeof str.countChar === "function");
});
test('exports a function "(str.)spacesToTabs"', (t) => {
  t.true(typeof str.spacesToTabs === "function");
});
test('exports a function "(str.)tabsToSpaces"', (t) => {
  t.true(typeof str.tabsToSpaces === "function");
});
test('exports a function "(str.)nlToBr"', (t) => {
  t.true(typeof str.nlToBr === "function");
});

test('exports a function "(str.)multiToSingleSpace"', (t) => {
  t.true(typeof str.multiToSingleSpace === "function");
});

test('exports a function "(str.)truncateAfterWord"', (t) => {
  t.true(typeof str.truncateAfterWord === "function");
});
test('exports a function "(str.)reverseString"', (t) => {
  t.true(typeof str.reverseString === "function");
});

test('exports a function "(str.)reverseWords"', (t) => {
  t.true(typeof str.reverseWords === "function");
});
