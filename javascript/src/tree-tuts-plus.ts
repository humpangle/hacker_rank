export class Node<T> {
  constructor(
    public data: T,
    public parent: Node<T> | null = null,
    public children: Array<Node<T>> = []
  ) {}

  traverseDF(callback: (node: Node<T>) => void) {
    const children = this.children;
    callback(this);

    for (let i = 0; i < children.length; i++) {
      children[i].traverseDF(callback);
    }
  }

  traverseBF(callback: (node: Node<T>) => void) {
    const queue = new Queue<Node<T>>();
    let current = this as Node<T>;

    while (current) {
      const children = current.children;

      for (let i = 0; i < children.length; i++) {
        queue.enqueue(children[i]);
      }

      callback(current);
      current = queue.dequeue() as Node<T>;
    }
  }

  add(
    transverse: Node<T>["traverseBF"] | Node<T>["traverseDF"],
    data: T,
    toData?: T
  ) {
    const node = new Node(data);
    let result = false;

    if ("undefined" === typeof toData) {
      node.parent = this;
      this.children.push(node);
      return node;
    }

    const cb = (n: Node<T>) => {
      if (n.data === toData) {
        node.parent = n;
        n.children.push(node);
        result = true;
      }
    };

    transverse.call(this, cb);

    return result ? node : null;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Queue<T> {
  head = 0;
  tail = 0;
  storage: { [key: number]: T } = {};

  enqueue(data: T) {
    this.storage[this.tail] = data;
    ++this.tail;
  }

  dequeue(): T | null {
    const head = this.head;

    if (head < this.tail) {
      const data = this.storage[head];
      delete this.storage[head];
      ++this.head;

      return data;
    }

    return null;
  }

  size() {
    return this.tail - this.head;
  }
}
