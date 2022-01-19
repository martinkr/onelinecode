import { reverseWords } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof reverseWords(input) === "string");
});

test("returns a reversed string", (t) => {
  let input = `foo bar baz`;
  let expectation = "oof rab zab";
  t.is(reverseWords(input), expectation);
});
