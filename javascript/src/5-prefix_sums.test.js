const { prefixSums } = require("./5-prefix_sums");

test("tests", () => {
  expect(prefixSums([1, 2, 3, 4])).toEqual([0, 1, 3, 6, 10]);
});
