import * as str from "../../src/string";
const test = require("ava");

test('exports a function "(str.)countWords"', (t) => {
  t.true(typeof str.countWords === "function");
});

test('exports a function "(str.)capitalise"', (t) => {
  t.true(typeof str.capitalise === "function");
});

test('exports a function "(str.)toCamelCase"', (t) => {
  t.true(typeof str.toCamelCase === "function");
});

test('exports a function "(str.)toPascalCase"', (t) => {
  t.true(typeof str.toPascalCase === "function");
});
