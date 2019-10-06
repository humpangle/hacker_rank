export class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function reverse(head) {
  if (!head) return;
  const queue = {};
  let c = 0;
  let curr;
  while (head) {
    curr = head;
    head = head.next;
    curr.next = null;
    queue[++c] = curr;
  }

  head = queue[c--];
  let prev = head;
  let t;

  while (c > 0) {
    t = queue[c--];
    prev.next = t;
    prev = t;
  }

  return head;
}
