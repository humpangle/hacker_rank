class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList {
  static fromList(array) {
    const list = new SinglyLinkedList();
    array.forEach(data => list.push(data));
    return list;
  }

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  toList() {
    return [...this];
  }

  reverse() {
    let head = this.head;

    if (head === null) {
      return;
    }

    let queue = {};
    let queueTail = 0;

    while (head !== null) {
      queue[queueTail++] = head.data;
      head = head.next;
    }

    const list = new SinglyLinkedList();

    while (queueTail > 0) {
      list.push(queue[--queueTail]);
    }

    queue = null;
    this.head = list.head;
    this.tail = list.tail;
  }

  *[Symbol.iterator]() {
    let head = this.head;

    while (head !== null) {
      yield head.data;
      head = head.next;
    }
  }
}
