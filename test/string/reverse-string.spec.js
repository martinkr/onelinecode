import { reverseString } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof reverseString(input) === "string");
});

test("returns a reversed string", (t) => {
  let input = `foo bar baz`;
  let expectation = "zab rab oof";
  t.is(reverseString(input), expectation);
});
