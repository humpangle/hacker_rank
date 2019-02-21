const { solution } = require("./cyclic_rotation");

test("test", () => {
  expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
  expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});
