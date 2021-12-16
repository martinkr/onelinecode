import { htmlSpecialChars } from "../../src/string";
const test = require("ava");

test("returns a string", (t) => {
  let input = "foo bar baz";
  t.true(typeof htmlSpecialChars(input) === "string");
});

test("returns a new string", (t) => {
  let input = "foo bar baz";
  htmlSpecialChars(input);
  t.is(input, "foo bar baz");
});

test("returns the a string where `<` is replaced with `'&lt;'`", (t) => {
  let input = "<foo, < bar";
  let expectation = "&lt;foo, &lt; bar";
  t.is(htmlSpecialChars(input), expectation);
});

test("returns the a string where `>` is replaced with `'&gt;'`", (t) => {
  let input = ">foo, > bar";
  let expectation = "&gt;foo, &gt; bar";
  t.is(htmlSpecialChars(input), expectation);
});

test("returns the a string where `&` is replaced with `'&amp;'`", (t) => {
  let input = "&foo, & bar";
  let expectation = "&amp;foo, &amp; bar";
  t.is(htmlSpecialChars(input), expectation);
});

test('returns the a string where `"` is replaced with &quot;', (t) => {
  let input = '"foo, " bar';
  let expectation = "&quot;foo, &quot; bar";
  t.is(htmlSpecialChars(input), expectation);
});

test("returns the a string where `'` is replaced with `&#039'`", (t) => {
  let input = "'foo, ' bar";
  let expectation = "&#039;foo, &#039; bar";
  t.is(htmlSpecialChars(input), expectation);
});

test("returns the a string where everything is replaced`", (t) => {
  let input = "<foo attr=\"\" /> & <bar attr='' />";
  let expectation =
    "&lt;foo attr=&quot;&quot; /&gt; &amp; &lt;bar attr=&#039;&#039; /&gt;";
  t.is(htmlSpecialChars(input), expectation);
});
