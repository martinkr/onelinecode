import { shallowClone } from "./../../src/array";
const test = require("ava");

test("copies all items of the array", (t) => {
  let input = [1, 2, 3];
  let value = shallowClone(input);
  t.deepEqual(value, input);
});

test("returns a clone with no references", (t) => {
  let input = [1, 2, 3];
  let value = shallowClone(input);
  input.pop();
  t.notDeepEqual(value, input);
});
