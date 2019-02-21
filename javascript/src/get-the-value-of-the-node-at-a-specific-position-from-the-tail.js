class Node {
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
    const node = new Node(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
}

function walk(node) {
  const acc = [];
  while (node != null) {
    acc.push(node.data);
    node = node.next;
  }

  return acc;
}

function getNode(head, positionFromTail) {
  const list = walk(head);
  console.log("list walk", list);
  return list[list.length - 1 - positionFromTail];
}

function fromLine(line) {
  const root = new SinglyLinkedList();
  line
    .trim()
    .split("\n")
    .forEach(t => root.insertNode(t.trim()));
  return root;
}

module.exports = {
  fromLine,
  getNode
};
