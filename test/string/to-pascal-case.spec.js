import { toPascalCase } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof toPascalCase(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  toPascalCase(input);
  t.is(input, "foo bar baz");
});

test("returns the PascalCased string using the space as delimiter", (t) => {
  let input = "foo bar baz";
  let expectation = "FooBarBaz";
  t.is(toPascalCase(input), expectation);
});

test("returns the PascalCased string using the dot as delimiter", (t) => {
  let input = "foo.bar.baz";
  let expectation = "FooBarBaz";
  t.is(toPascalCase(input), expectation);
});

test("returns the PascalCased string using the underscore as delimiter", (t) => {
  let input = "foo_bar_baz";
  let expectation = "FooBarBaz";
  t.is(toPascalCase(input), expectation);
});

test("returns the PascalCased string using the dash as delimiter", (t) => {
  let input = "foo-bar-baz";
  let expectation = "FooBarBaz";
  t.is(toPascalCase(input), expectation);
});
