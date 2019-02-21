const getQuestion = require("./utils/get-question");
const {
  SinglyLinkedList,
  findMergeNode
} = require("./find-the-merge-point-of-two-joined-linked-lists");

test("1", () => {
  expect(findMergeNode(...makeQuestion("input01.txt"))).toBe(3);
});

test("2", () => {
  expect(findMergeNode(...makeQuestion("input02.txt"))).toBe(2);
});

test("3", () => {
  expect(findMergeNode(...makeQuestion("input03.txt"))).toBe(9);
});

function makeQuestion(fileName) {
  const input = getQuestion(
    `find-the-merge-point-of-two-joined-linked-lists/${fileName}`
  ).split("\n");

  const numIterations = parseInt(input[0], 10);
  let mergeIndex = parseInt(input[1], 10);
  let node1StartIndex;
  let node2StartIndex = 0;
  let nodesCount2 = 1;
  let nodesCount1 = 0;

  for (
    let iterationIndex = 0;
    iterationIndex < numIterations;
    iterationIndex++
  ) {
    node1StartIndex = node2StartIndex + nodesCount2 + 1;
    nodesCount1 = parseInt(input[node1StartIndex], 10);

    node2StartIndex = node1StartIndex + nodesCount1 + 1;
    nodesCount2 = parseInt(input[node2StartIndex], 10);

    let linkedList1 = new SinglyLinkedList();
    let linkedList2 = new SinglyLinkedList();
    let dataIndex;
    let i;
    let data;

    for (dataIndex = 0; dataIndex < nodesCount1; dataIndex++) {
      data = parseInt(input[node1StartIndex + dataIndex + 1], 10);
      linkedList1.insertNode(data);
    }

    for (dataIndex = 0; dataIndex < nodesCount2; dataIndex++) {
      data = parseInt(input[node2StartIndex + dataIndex + 1], 10);
      linkedList2.insertNode(data);
    }

    let p1 = linkedList1.head;
    let p2 = linkedList2.head;

    for (i = 0; i < nodesCount1; i++) {
      if (i < mergeIndex) {
        p1 = p1.next;
      }
    }

    for (i = 0; i < nodesCount2; i++) {
      if (i !== nodesCount2 - 1) {
        p2 = p2.next;
      }
    }

    p2.next = p1;

    return [linkedList1.head, linkedList2.head];
  }
}
