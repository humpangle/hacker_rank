const { solution } = require("./5-prefix_sums_passing_cars");

test("tests", () => {
  expect(solution([0, 1, 0, 1, 1])).toBe(5);
  expect(solution([0, 1, 0, 1, 1, 0, 0, 1, 1])).toBe(13);
  expect(solution([1, 1, 0, 1, 1])).toBe(2);
});
