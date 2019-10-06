class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyList {
  static fromArray(array) {
    const root = new DoublyList();
    array.forEach(a => root.push(a));
    return root;
  }

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const node = new Node(data);

    if (this.length) {
      node.previous = this.tail;
      this.tail.next = node;
    } else {
      this.head = node;
    }

    ++this.length;
    this.tail = node;
    return node;
  }

  searchNodeAt(position) {
    let { head } = this;

    if (position < 0 || position > this.length) {
      return undefined;
    }

    let pos = 1;

    while (pos <= position) {
      if (pos === position) {
        return head;
      }
      ++pos;
      head = head.next;
    }
  }

  removeNodeAt(position) {
    const { length } = this;

    // negative indexing
    if (position < 0) {
      position = length - position + 1;
    }

    let node = this.searchNodeAt(position);

    if (node.previous) {
      node.previous.next = node.next;
    } else {
      this.head = node.next;
      this.tail = node.next;
    }

    if (node.next) {
      node.next.previous = node.previous;
    } else {
      this.tail = node.previous;
      this.tail.next = null;
    }

    this.length--;
    node = null;
  }
}

class LinkedList {
  static fromArray(array) {
    const list = new LinkedList();
    array.forEach(a => list.unshift(a));
    return list;
  }

  constructor(data = null) {
    this.length = data === null ? 0 : 1;
    this.head = data;
    this.tail = null;
  }

  unshift(data) {
    if (this.length) {
      const { head, tail } = this;
      this.head = data;
      const list = new LinkedList(head);
      list.tail = tail;
      this.tail = list;
    } else {
      this.head = data;
    }

    ++this.length;
  }

  walk() {
    const result = [this.head];
    let { tail } = this;

    while (tail) {
      result.push(tail.head);
      tail = tail.tail;
    }

    return result.reverse();
  }
}

module.exports = {
  DoublyList,
  Node,
  LinkedList
};
