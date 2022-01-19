import { multiToSingleSpace } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof multiToSingleSpace(input) === "string");
});

test("returns the string with multi spaces replaced by one", (t) => {
  let input = `foo  bar      baz`;
  let expectation = `foo bar baz`;
  t.is(multiToSingleSpace(input), expectation);
});
