export interface Node {
  data: number;
  left: Node | null;
  right: Node | null;
}

export function makeNode(nodeData: number[]) {
  const len = nodeData.length;

  if (len === 0) {
    throw new Error("You must specify at least one node data");
  }

  let node: Node;

  if (len === 1) {
    node = {
      data: nodeData[0],
      left: null,
      right: null
    };

    return node;
  }

  const mid = Math.floor(len / 2);
  node = {
    data: nodeData[mid],
    left: makeNode(nodeData.slice(0, mid)),
    right: len === 2 ? null : makeNode(nodeData.slice(mid + 1))
  };

  return node;
}

export function walk(node: Node): number[] {
  const { data, left, right } = node;
  return ((left && walk(left)) || [])
    .concat([data])
    .concat((right && walk(right)) || []);
}

export function isBinarySearch(node: Node): boolean {
  const { data, left, right } = node;

  if (left === null && right === null) {
    return true;
  }

  if (!right || !left) {
    return false;
  }

  if (walk(right).find(r => data >= r) || walk(left).find(l => data <= l)) {
    return false;
  }

  return isBinarySearch(right) && isBinarySearch(left);
}
