import { toURLSlug } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof toURLSlug(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  toURLSlug(input);
  t.is(input, "foo bar baz");
});

test("returns the URL slug using the space as delimiter", (t) => {
  let input = "foo bar baz";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug using the dot as delimiter", (t) => {
  let input = "foo.bar.baz";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug using the underscore as delimiter", (t) => {
  let input = "foo_bar_baz";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug using the dash as delimiter", (t) => {
  let input = "foo-bar-baz";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug in all lowercaser", (t) => {
  let input = "Foo Bar Baz";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug without leading and trailing whitespace", (t) => {
  let input = "  Foo Bar Baz  ";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug without leading and trailing -", (t) => {
  let input = "!?Foo Bar Baz!?";
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});

test("returns the URL slug without punctation marks and whitespaces", (t) => {
  let input = '[foo] Bar-Baz ~ …  ;,. ! ?     – — · / ( ) { } [ ] "';
  let expectation = "foo-bar-baz";
  t.is(toURLSlug(input), expectation);
});
