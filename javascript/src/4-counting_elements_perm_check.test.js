const { solution } = require("./4-counting_elements_perm_check");

test("tests", () => {
  expect(solution([4, 1, 3, 2])).toBe(1);
  expect(solution([4, 1, 3])).toBe(0);
  expect(solution([4, 1, 3, 2, 4])).toBe(0);
});
