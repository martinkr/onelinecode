import { tabsToSpaces } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo	bar	baz";
  t.true(typeof tabsToSpaces(input) === "string");
});

test("returns the where \t is replace with four spaces (default)", (t) => {
  let input = `foo	bar	baz`;
  let expectation = "foo    bar    baz";
  t.is(tabsToSpaces(input), expectation);
});

test("returns the where \t is replace with a configured amount of spaces", (t) => {
  let input = `foo	bar	baz`;
  let expectation = "foo  bar  baz";
  t.is(tabsToSpaces(input, 2), expectation);
});
