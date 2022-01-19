import { countChar } from "../../src/string";
const test = require("ava");

test("returns a number", (t) => {
  let input = "foo bar baz";
  t.true(typeof countChar(input, "a") === "number");
});

test("returns the occurences of a specific char in the string", (t) => {
  let input = "foo bar baz";
  t.is(countChar(input, "a"), 2);
});
