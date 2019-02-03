import { Queue, Node } from "./tree-tuts-plus";

test("queue", () => {
  let q = new Queue();
  expect(q.size()).toBe(0);

  q.enqueue(1);
  expect(q.size()).toBe(1);

  q.enqueue(2);
  expect(q.size()).toBe(2);

  q.enqueue(3);
  expect(q.size()).toBe(3);

  expect(q.dequeue()).toBe(1);
  expect(q.size()).toBe(2);

  expect(q.dequeue()).toBe(2);
  expect(q.size()).toBe(1);

  expect(q.dequeue()).toBe(3);
  expect(q.size()).toBe(0);

  expect(q.dequeue()).toBeNull();
});

test("tree 1", () => {
  const n = new Node(1);
  n.children.push(new Node(2));
  n.children.push(new Node(3));
  const d = new Node(4);
  d.children.push(new Node(5));
  n.children.push(d);
  const result: number[] = [];
  n.traverseDF(node => result.push(node.data));

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("tree 2", () => {
  const n = new Node("one");

  n.children.push(new Node("two"));
  n.children[0].parent = n;

  n.children.push(new Node("three"));
  n.children[1].parent = n;

  n.children.push(new Node("four"));
  n.children[2].parent = n;

  n.children[0].children.push(new Node("five"));
  n.children[0].children[0].parent = n.children[0];

  n.children[0].children.push(new Node("six"));
  n.children[0].children[1].parent = n.children[0];

  n.children[2].children.push(new Node("seven"));
  n.children[2].children[0].parent = n.children[2];

  const result: string[] = [];
  n.traverseDF(node => result.push(node.data));

  expect(result).toEqual([
    "one",
    "two",
    "five",
    "six",
    "three",
    "four",
    "seven"
  ]);
});

test("tree bfs", () => {
  const n = new Node("one");

  n.children.push(new Node("two"));
  n.children[0].parent = n;

  n.children.push(new Node("three"));
  n.children[1].parent = n;

  n.children.push(new Node("four"));
  n.children[2].parent = n;

  n.children[0].children.push(new Node("five"));
  n.children[0].children[0].parent = n.children[0];

  n.children[0].children.push(new Node("six"));
  n.children[0].children[1].parent = n.children[0];

  n.children[2].children.push(new Node("seven"));
  n.children[2].children[0].parent = n.children[2];

  const result: string[] = [];
  n.traverseBF(node => result.push(node.data));

  expect(result).toEqual([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]);
});

test("tree add bfs", () => {
  const n = new Node("one");
  const two = n.add(n.traverseBF, "two") as Node<string>;
  n.add(n.traverseBF, "three");
  n.add(n.traverseBF, "four");
  n.children[0].add(n.traverseBF, "five");
  n.add(n.traverseBF, "seven", "four");
  two.add(n.traverseBF, "six");

  const result: string[] = [];
  n.traverseBF(node => result.push(node.data));

  expect(result).toEqual([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven"
  ]);
});
