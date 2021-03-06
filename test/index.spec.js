import { arr } from "../src";
import { str } from "../src";
const test = require("ava");

/** ARRAY */

test('exports a function "(arr.)occurrenceMap"', (t) => {
  t.true(typeof arr.occurrenceMap === "function");
});

test('exports a function "(arr.)isEmpty"', (t) => {
  t.true(typeof arr.isEmpty === "function");
});

test('exports a function "(arr.)removeDuplicates"', (t) => {
  t.true(typeof arr.removeDuplicates === "function");
});

test('exports a function "(arr.)shallowClone"', (t) => {
  t.true(typeof arr.shallowClone === "function");
});

test('exports a function "(arr.)lowestNumber"', (t) => {
  t.true(typeof arr.lowestNumber === "function");
});

test('exports a function "(arr.)highestNumber"', (t) => {
  t.true(typeof arr.highestNumber === "function");
});

test('exports a function "(arr.)closestNumber"', (t) => {
  t.true(typeof arr.closestNumber === "function");
});

test('exports a function "(arr.)indexOfLowestNumber"', (t) => {
  t.true(typeof arr.indexOfLowestNumber === "function");
});
test('exports a function "(arr.)indexOfHighestNumber"', (t) => {
  t.true(typeof arr.indexOfHighestNumber === "function");
});

test('exports a function "(arr.)splitInHalf"', (t) => {
  t.true(typeof arr.splitInHalf === "function");
});

test('exports a function "(arr.)longestString"', (t) => {
  t.true(typeof arr.longestString === "function");
});

test('exports a function "(arr.)shortestString"', (t) => {
  t.true(typeof arr.shortestString === "function");
});

test('exports a function "(arr.)shortestStringLength"', (t) => {
  t.true(typeof arr.shortestStringLength === "function");
});

test('exports a function "(arr.)longestStringLength"', (t) => {
  t.true(typeof arr.longestStringLength === "function");
});

test('exports a function "(arr.)oddItems"', (t) => {
  t.true(typeof arr.oddItems === "function");
});

test('exports a function "(arr.)evenItems"', (t) => {
  t.true(typeof arr.evenItems === "function");
});

test('exports a function "(arr.)mergeArrayUnique"', (t) => {
  t.true(typeof arr.mergeArrayUnique === "function");
});

test('exports a function "(arr.)mergeArray"', (t) => {
  t.true(typeof arr.mergeArray === "function");
});

test('exports a function "(Array.)clean"', (t) => {
  t.true(typeof arr.clean === "function");
});

test('exports a function "(Array.)sum"', (t) => {
  t.true(typeof arr.sum === "function");
});

test('exports a function "(Array.)average"', (t) => {
  t.true(typeof arr.average === "function");
});

test('exports a function "(Array.)nthItems"', (t) => {
  t.true(typeof arr.nthItems === "function");
});

test('exports a function "(Array.)sortAsc"', (t) => {
  t.true(typeof arr.sortAsc === "function");
});

test('exports a function "(Array.)sortDesc"', (t) => {
  t.true(typeof arr.sortDesc === "function");
});

test('exports a function "(Array.)shuffle"', (t) => {
  t.true(typeof arr.shuffle === "function");
});

test('exports a function "(Array.)createRange"', (t) => {
  t.true(typeof arr.createRange === "function");
});

/** STRING */

test('exports a function "(String.)countWords"', (t) => {
  t.true(typeof str.countWords === "function");
});

test('exports a function "(String.)capitalise"', (t) => {
  t.true(typeof str.capitalise === "function");
});

test('exports a function "(String.)toCamelCase"', (t) => {
  t.true(typeof str.toCamelCase === "function");
});

test('exports a function "(String.)toPascalCase"', (t) => {
  t.true(typeof str.toPascalCase === "function");
});

test('exports a function "(String.)toURLSlug"', (t) => {
  t.true(typeof str.toURLSlug === "function");
});

test('exports a function "(String.)htmlSpecialChars"', (t) => {
  t.true(typeof str.htmlSpecialChars === "function");
});

test('exports a function "(String.)toLowerCase"', (t) => {
  t.true(typeof str.toLowerCase === "function");
});

test('exports a function "(String.)countChar"', (t) => {
  t.true(typeof str.countChar === "function");
});
test('exports a function "(String.)spacesToTabs"', (t) => {
  t.true(typeof str.spacesToTabs === "function");
});
test('exports a function "(String.)tabsToSpaces"', (t) => {
  t.true(typeof str.tabsToSpaces === "function");
});
test('exports a function "(String.)nlToBr"', (t) => {
  t.true(typeof str.nlToBr === "function");
});
test('exports a function "(String.)multiToSingleSpace"', (t) => {
  t.true(typeof str.multiToSingleSpace === "function");
});
test('exports a function "(String.)truncateAfterWord"', (t) => {
  t.true(typeof str.truncateAfterWord === "function");
});
test('exports a function "(String.)reverseString"', (t) => {
  t.true(typeof str.reverseString === "function");
});
test('exports a function "(String.)reverseWords"', (t) => {
  t.true(typeof str.reverseWords === "function");
});
