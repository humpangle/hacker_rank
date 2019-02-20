const { dedupe, dedupe1 } = require("./remove-array-duplicate-values");

test("dedupe", () => {
  const array = [1, 2, 5, 2, 1, 8];
  expect(dedupe(array)).toEqual([1, 2, 5, 8]);
});

test("dedupe1", () => {
  const array = [1, 2, 5, 2, 1, 8];
  expect(dedupe1(array)).toEqual([1, 2, 5, 8]);
});
