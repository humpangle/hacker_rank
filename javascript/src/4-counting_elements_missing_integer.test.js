const { solution } = require("./4-counting_elements_missing_integer");

test("tests", () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
  expect(solution([1, 2, 3])).toBe(4);
  expect(solution([1, 2, 31])).toBe(3);
  expect(solution([-1, -3])).toBe(1);
  expect(solution([0, 2, 3])).toBe(1);
  expect(solution([1, 2, 3])).toBe(4);
  expect(solution([1])).toBe(2);
});
