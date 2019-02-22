const { solution } = require("./4-counting_elements_frog_river_one");

test("tests", () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  expect(solution(5, [3, 1, 4, 2, 3, 1, 4])).toBe(-1);
  expect(solution(5, [5, 3, 1, 4, 2, 3, 1, 4])).toBe(4);
});
