const { solution } = require("./3-time_complexity_tape_equilibrium");

test("tests", () => {
  expect(solution([-30])).toBe(30);
  expect(solution([0])).toBe(0);
  expect(solution([-1, 100000])).toBe(100001);
  expect(solution([3, 1, 2, 4, 3])).toBe(1);
});
