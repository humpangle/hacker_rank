const { solution } = require("./4-counting_elements_max_counters");

test("tests", () => {
  expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  expect(solution(5, [6, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  expect(solution(5, [6, 4, 4, 6, 1, 6, 4])).toEqual([3, 3, 3, 4, 3]);
  // expect(solution(5, Array(100099999).fill(6))).toEqual([0, 0, 0, 0, 0]);
});
