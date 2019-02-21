class Node {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }

  list() {
    const dataList = [];
    let c = this;
    while (c) {
      dataList.push(c.data);
      c = c.next;
    }

    return dataList;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new Node(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
}

function findMergeNode(headA, headB) {
  let c1 = headA;

  let c2;

  while (c1) {
    c2 = headB;

    while (c2) {
      if (c1 === c2) return c1.data;
      c2 = c2.next;
    }

    c1 = c1.next;
  }
}

module.exports = { SinglyLinkedList, findMergeNode };
