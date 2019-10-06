import { pascalTriangleRecursive, pascalTriangleNonRecursive } from "./pascal-triangle";

test("pascalTriangle3(1)", () => {
  expect(pascalTriangleRecursive(1)).toEqual([1]);
});

test("pascalTriangle3(2)", () => {
  expect(pascalTriangleRecursive(2)).toEqual([1, 1]);
});

test("pascalTriangle3(3)", () => {
  expect(pascalTriangleRecursive(3)).toEqual([1, 2, 1]);
});

test("pascalTriangle3(4)", () => {
  expect(pascalTriangleRecursive(4)).toEqual([1, 3, 3, 1]);
});

test("pascalTriangle2(1)", () => {
  expect(pascalTriangleNonRecursive(1)).toEqual([[1]]);
});

test("pascalTriangle2(2)", () => {
  expect(pascalTriangleNonRecursive(2)).toEqual([[1], [1, 1]]);
});

test("pascalTriangle2(3)", () => {
  expect(pascalTriangleNonRecursive(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});

test("pascalTriangle2(4)", () => {
  expect(pascalTriangleNonRecursive(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
});
