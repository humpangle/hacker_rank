import { Node, walk, makeNode, isBinarySearch } from "./binary-search-tree";

it("raises when node data is empty", () => {
  expect(() => makeNode([])).toThrowError(/must/);
});

it("makes single node data", () => {
  const { data, left, right } = makeNode([1]) as Node;
  expect(data).toBe(1);
  expect(left).toBeNull();
  expect(right).toBeNull();
});

it("makes node for 2 node data", () => {
  const node = makeNode([1, 2]) as Node;
  expect(node.data).toBe(2);

  const left = node.left as Node;
  const right = node.right;

  expect(typeof left).toBe("object");
  expect(right).toBeNull();

  expect(left.data).toBe(1);
  expect(left.left).toBeNull();
  expect(left.right).toBeNull();
});

it("makes node for 3 node data", () => {
  const node = makeNode([1, 2, 3]) as Node;
  expect(node.data).toBe(2);

  const left = node.left as Node;
  const right = node.right as Node;

  expect(typeof left).toBe("object");
  expect(typeof right).toBe("object");

  expect(left.data).toBe(1);
  expect(left.left).toBeNull();
  expect(left.right).toBeNull();

  expect(right.data).toBe(3);
  expect(right.left).toBeNull();
  expect(right.right).toBeNull();
});

it("walks node with 2 data", () => {
  const numData = Math.ceil(Math.random() * 19) + 1;
  expect(numData).toBeLessThan(21);

  const nodeData = Array.from(Array(numData), (x, index) => index);

  const node = makeNode(nodeData) as Node;
  expect(walk(node)).toEqual(nodeData);
});

test("isBinarySearch is true for single data node", () => {
  const node = makeNode([1]) as Node;
  expect(isBinarySearch(node)).toBe(true);
});

test("isBinarySearch is false for unbalanced node", () => {
  const node = makeNode([1, 2, 3, 4]) as Node;
  const result = isBinarySearch(node);
  expect(result).toBe(false);
});

test("isBinarySearch is true for binary search node", () => {
  const node = makeNode([1, 2, 3]) as Node;
  expect(isBinarySearch(node)).toBe(true);
});

test("isBinarySearch is true for binary search node", () => {
  const node = makeNode([1, 2, 3, 5, 4, 6, 7]) as Node;
  expect(isBinarySearch(node)).toBe(false);
});
