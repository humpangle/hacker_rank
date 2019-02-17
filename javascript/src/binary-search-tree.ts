export class Node {
  constructor(
    public data: number,
    public left: null | Node = null,
    public right: null | Node = null
  ) {}
}

export function makeNode(dataList: number[]) {
  const len = dataList.length;

  if (!len) {
    throw new Error("must");
  }

  const mid = Math.floor(len / 2);
  const root = new Node(dataList[mid]);

  if (len === 1) {
    return root;
  }

  if (len === 2) {
    root.left = new Node(dataList[0]);
    return root;
  }

  root.right = makeNode(dataList.slice(mid + 1));
  root.left = makeNode(dataList.slice(0, mid));

  return root;
}

export function walk(node: Node): number[] {
  const { data, left, right } = node;
  return ((left && walk(left)) || [])
    .concat([data])
    .concat((right && walk(right)) || []);
}

export function isBinarySearch(root: Node): boolean {
  if (!root) {
    return true;
  }

  const { data, left, right } = root;

  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  return (
    compare(left, data, "left") &&
    compare(right, data, "right") &&
    isBinarySearch(left as Node) &&
    isBinarySearch(right as Node)
  );
}

function compare(
  node: Node | null,
  comp: number,
  side: "left" | "right"
): boolean {
  if (!node) {
    return true;
  }

  if (
    (side === "left" && comp <= node.data) ||
    (side === "right" && comp >= node.data)
  ) {
    return false;
  }

  return compare(node.left, comp, side) && compare(node.right, comp, side);
}
