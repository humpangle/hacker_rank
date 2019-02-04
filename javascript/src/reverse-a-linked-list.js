export class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function reverse(head) {
  if (!head) return;
  let s = {};
  let c = 0;
  let curr;
  while (head) {
    curr = head;
    head = head.next;
    curr.next = null;
    s[++c] = curr;
  }

  head = s[c--];
  let prev = head;
  let t;

  while (c > 0) {
    t = s[c--];
    prev.next = t;
    prev = t;
  }

  return head;
}
