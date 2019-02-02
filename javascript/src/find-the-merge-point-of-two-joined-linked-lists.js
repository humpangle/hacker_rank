class SinglyLinkedListNode {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  getDatas() {
    const datas = [];
    let c = this.head;
    while (c) {
      datas.push(c.data);
      c = c.next;
    }

    return datas;
  }
}

function findMergeNode(headA, headB) {
  let c1 = headA,
    c2;

  while (c1) {
    c2 = headB;

    while (c2) {
      if (c1 === c2) return c1.data;
      c2 = c2.next;
    }

    c1 = c1.next;
  }
}

const getQuestion = require("./get-question");

function makeQuestion(fileName) {
  return getQuestion(
    "find-the-merge-point-of-two-joined-linked-lists/" + fileName
  );
}

let input = makeQuestion("input01.txt").split("\n");
let numIterations = parseInt(input[0], 10);

for (let iterationIndex = 0; iterationIndex < numIterations; iterationIndex++) {
  const mergeIndex = parseInt(input[1], 10),
    nodesCount1 = parseInt(input[2], 10),
    linkedList1 = new SinglyLinkedList(),
    linkedList2 = new SinglyLinkedList(),
    nodesCount2 = parseInt(input[nodesCount1 + 3], 10);

  let dataIndex, i;

  for (dataIndex = 0; dataIndex < nodesCount1; dataIndex++) {
    linkedList1.insertNode(input[3 + dataIndex]);
  }

  for (dataIndex = 0; dataIndex < nodesCount2; dataIndex++) {
    linkedList2.insertNode(input[3 + nodesCount1 + dataIndex]);
  }

  let p1 = linkedList1.head,
    p2 = linkedList2.head;

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

  const result = findMergeNode(linkedList1.head, linkedList2.head);
  console.log(result);
}
