import { toLowerCase } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof toLowerCase(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  toLowerCase(input);
  t.is(input, "foo bar baz");
});

test("returns the lower cased string using the space as delimiter", (t) => {
  let input = "Foo bar Baz";
  let expectation = "foo bar baz";
  t.is(toLowerCase(input), expectation);
});
