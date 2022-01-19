import { spacesToTabs } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo    bar    baz";
  t.true(typeof spacesToTabs(input) === "string");
});

test("returns the where four spaces are replace with one tab (default)", (t) => {
  let input = `foo    bar    baz`;
  let expectation = "foo	bar	baz";
  t.is(spacesToTabs(input), expectation);
});

test("returns the where tow spaces are replace with one tab", (t) => {
  let input = `foo    bar    baz`;
  let expectation = "foo		bar		baz";
  t.is(spacesToTabs(input, 2), expectation);
});
