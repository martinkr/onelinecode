import { truncateAfterWord } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof truncateAfterWord(input) === "string");
});

test("returns truncated string", (t) => {
  let input = `foo bar baz`;
  let expectation = "foo bar…";
  t.is(truncateAfterWord(input, 9), expectation);
});

test("returns truncated string while preserving the word boundaries", (t) => {
  let input = `foo bar baz`;
  let expectation = "foo…";
  t.is(truncateAfterWord(input, 7), expectation);
});

test("returns truncated with a custom placeholder", (t) => {
  let input = `foo bar baz`;
  let expectation = "foo barXX";
  t.is(truncateAfterWord(input, 10, "XX"), expectation);
});
