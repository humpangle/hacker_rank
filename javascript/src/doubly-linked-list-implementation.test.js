const { DoublyList, Node } = require("./doubly-linked-list-implementation");

it("creates list from empty array", () => {
  const list = DoublyList.fromArray([]);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(list.length).toBe(0);
});

it("creates list from array of one element", () => {
  const list = DoublyList.fromArray([1]);
  const node = new Node(1);
  expect(list.head).toEqual(node);
  expect(list.tail).toEqual(node);
  expect(list.length).toBe(1);
});

it("creates list from array of two element", () => {
  const list = DoublyList.fromArray([1, 2]);
  const { head, tail, length } = list;
  const node1 = new Node(1);
  const node2 = new Node(2);
  node1.next = node2;
  node2.previous = node1;
  expect(head).toEqual(node1);
  expect(tail).toEqual(node2);
  expect(length).toBe(2);
});

test("searchNodeAt", () => {
  const list = DoublyList.fromArray([1, 2, 3, 4]);
  const node1 = list.searchNodeAt(1);
  expect(list.head).toBe(node1);

  const node4 = list.searchNodeAt(4);
  expect(list.tail).toBe(node4);

  expect(list.searchNodeAt(2).data).toEqual(2);
  expect(list.searchNodeAt(3).data).toEqual(3);
});
