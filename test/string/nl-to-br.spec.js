import { nlToBr } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof nlToBr(input) === "string");
});

test("returns the where \r\n is replace with <br />", (t) => {
  let input = `foo
bar
baz`;
  let expectation = "foo<br />bar<br />baz";
  t.is(nlToBr(input), expectation);
});
