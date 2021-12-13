import { toCamelCase } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof toCamelCase(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  toCamelCase(input);
  t.is(input, "foo bar baz");
});

test("returns the camelCased string using the space as delimiter", (t) => {
  let input = "foo bar baz";
  let expectation = "fooBarBaz";
  t.is(toCamelCase(input), expectation);
});

test("returns the camelCased string using the dot as delimiter", (t) => {
  let input = "foo.bar.baz";
  let expectation = "fooBarBaz";
  t.is(toCamelCase(input), expectation);
});

test("returns the camelCased string using the underscore as delimiter", (t) => {
  let input = "foo_bar_baz";
  let expectation = "fooBarBaz";
  t.is(toCamelCase(input), expectation);
});

test("returns the camelCased string using the dash as delimiter", (t) => {
  let input = "foo-bar-baz";
  let expectation = "fooBarBaz";
  t.is(toCamelCase(input), expectation);
});
