const { solution } = require("./5-prefix_sums_genomic_range_query");

test("tests", () => {
  expect(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
});
