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
}

exports.SinglyLinkedList = SinglyLinkedList;

function walk(node) {
  const result = [];
  while (node) {
    result.push(node.data);
    node = node.next;
  }

  return result;
}

exports.walk = walk;

function mergeLists(head1, head2) {
  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  let data1 = head1.data;
  let data2 = head2.data;
  let merge;
  let acc;

  if (data1 <= data2) {
    merge = new SinglyLinkedListNode(data1);
    head1 = head1.next;
  } else {
    merge = new SinglyLinkedListNode(data2);
    const temp = head2.next;
    head2 = head1;
    head1 = temp;
  }

  acc = merge;

  while (head1) {
    data1 = head1.data;
    [head2, acc] = walkWhileLess(head2, data1, acc);
    acc.next = new SinglyLinkedListNode(data1);
    acc = acc.next;
    head1 = head1.next;
  }

  if (head2) {
    acc.next = head2;
  }

  return merge;
}

function walkWhileLess(node, compData, acc) {
  while (node) {
    const { data } = node;

    if (data <= compData) {
      node = node.next;
      acc.next = new SinglyLinkedListNode(data);
      acc = acc.next;
    } else {
      break;
    }
  }

  return [node, acc];
}

exports.mergeLists = mergeLists;

function fromList(list) {
  const root = new SinglyLinkedList();
  list.forEach(i => root.insertNode(i));
  return root;
}

exports.fromList = fromList;
