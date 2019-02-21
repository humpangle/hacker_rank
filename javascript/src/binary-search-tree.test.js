const {
  makeNode,
  walk,
  isBinarySearch,
  makeNodeBF,
  walkBF
} = require("./binary-search-tree");

it("raises when node data is empty", () => {
  expect(() => makeNode([])).toThrowError(/must/);
});

it("makes single node data", () => {
  const { data, left, right } = makeNode([1]);
  expect(data).toBe(1);
  expect(left).toBeNull();
  expect(right).toBeNull();
});

it("makes node for 2 node data", () => {
  const node = makeNode([1, 2]);
  expect(node.data).toBe(2);

  const { left } = node;
  const { right } = node;

  expect(typeof left).toBe("object");
  expect(right).toBeNull();

  expect(left.data).toBe(1);
  expect(left.left).toBeNull();
  expect(left.right).toBeNull();
});

it("makes node for 3 node data", () => {
  const node = makeNode([1, 2, 3]);
  expect(node.data).toBe(2);

  const { left } = node;
  const { right } = node;

  expect(typeof left).toBe("object");
  expect(typeof right).toBe("object");

  expect(left.data).toBe(1);
  expect(left.left).toBeNull();
  expect(left.right).toBeNull();

  expect(right.data).toBe(3);
  expect(right.left).toBeNull();
  expect(right.right).toBeNull();
});

it("walks node with any number of data", () => {
  const numData = 1 + Math.ceil(Math.random() * 19);
  expect(numData).toBeLessThan(21);

  const nodeData = Array.from({ length: numData }, (x, index) => index);

  const node = makeNode(nodeData);
  expect(walk(node)).toEqual(nodeData);
});

test("isBinarySearch is true for single data node", () => {
  const node = makeNode([1]);
  expect(isBinarySearch(node)).toBe(true);
});

test("isBinarySearch is false for unbalanced node", () => {
  const node = makeNode([1, 2, 3, 4]);
  const result = isBinarySearch(node);
  expect(result).toBe(false);
});

test("isBinarySearch is true for binary search node", () => {
  const node = makeNode([1, 2, 3]);
  expect(isBinarySearch(node)).toBe(true);
});

test("isBinarySearch is false for binary search node", () => {
  const node = makeNode([1, 2, 3, 5, 4, 6, 7]);
  expect(isBinarySearch(node)).toBe(false);
});

test("isBinarySearch is true for binary search node 2", () => {
  const node = makeNode([1, 2, 3, 4, 5, 6, 7]);
  expect(isBinarySearch(node)).toBe(true);
});

test("breadth first", () => {
  const node = makeNodeBF([3, 5, 2, 1, 4, 6, 7]);
  expect(walkBF(node)).toEqual([3, 2, 5, 1, 4, 6, 7]);
});
