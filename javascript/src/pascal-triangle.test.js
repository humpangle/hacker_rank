const { pascalTriangle3, pascalTriangle2 } = require("./pascal-triangle");

test("1", () => {
  expect(pascalTriangle3(1)).toEqual([1]);
});

test("2", () => {
  expect(pascalTriangle3(2)).toEqual([1, 1]);
});

test("3", () => {
  expect(pascalTriangle3(3)).toEqual([1, 2, 1]);
});

test("4", () => {
  expect(pascalTriangle3(4)).toEqual([1, 3, 3, 1]);
});

test("1", () => {
  expect(pascalTriangle2(1)).toEqual([[1]]);
});

test("2", () => {
  expect(pascalTriangle2(2)).toEqual([[1], [1, 1]]);
});

test("3", () => {
  expect(pascalTriangle2(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});

test("4", () => {
  expect(pascalTriangle2(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
});
