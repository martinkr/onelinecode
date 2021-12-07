import { capitalise } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof capitalise(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  capitalise(input);
  t.is(input, "foo bar baz");
});

test("returns the capitalised string", (t) => {
  let input = "foo bar baz";
  let expectation = "Foo bar baz";
  t.is(capitalise(input), expectation);
});
