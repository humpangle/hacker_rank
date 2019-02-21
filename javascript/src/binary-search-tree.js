class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function makeNodeDF(array) {
  const len = array.length;

  if (len === 0) {
    throw new Error("must");
  }

  const mid = Math.floor(len / 2);
  const root = new Node(array[mid]);

  if (len === 1) {
    return root;
  }

  root.left = makeNodeDF(array.slice(0, mid));
  root.right = len > 2 ? makeNodeDF(array.slice(mid + 1)) : null;

  return root;
}

function walkDF(root) {
  if (!root) {
    return [];
  }

  return ((root.left && walkDF(root.left)) || [])
    .concat([root.data])
    .concat((root.right && walkDF(root.right)) || []);
}

function isBinarySearch(root) {
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
    walkCompare(data, left, "left") &&
    walkCompare(data, right, "right") &&
    isBinarySearch(left) &&
    isBinarySearch(right)
  );
}

function walkCompare(compareData, rootNode, side) {
  if (!rootNode) {
    return true;
  }

  const { data, left, right } = rootNode;

  if (
    (side === "left" && compareData <= data) ||
    (side === "right" && compareData >= data)
  ) {
    return false;
  }

  return (
    walkCompare(compareData, left, side) &&
    walkCompare(compareData, right, side)
  );
}

function makeNodeBF(array) {
  let a = array[0];
  let b = array[1];
  let c = array[2];
  let root = new Node(a);

  if (b < a) {
    root.left = new Node(b);
    root.right = new Node(c);
  } else {
    root.right = new Node(b);
    root.left = new Node(c);
  }

  for (let i = 3; i < array.length; i++) {
    const el = array[i];
    pushNode(el, el < a ? root.left : root.right);
  }

  return root;
}

function pushNode(el, node) {
  while (node) {
    const { data, left, right } = node;

    if (el < data) {
      if (!left) {
        node.left = new Node(el);
        return;
      }
      node = left;
    } else {
      if (!right) {
        node.right = new Node(el);
        return;
      }
      node = right;
    }
  }
}

/**
 * @param  {(Node|null)} root - The root of the binary search tree
 * @returns {number[]}
 */
function walkBF(root) {
  if (!root) {
    return [];
  }

  const { data, left, right } = root;

  /**
   * @type {Object.<number, Array.<number>>}
   */
  const acc = { 0: [data] };

  walkBFNode(left, acc, 1);
  walkBFNode(right, acc, 1);

  return Object.values(acc).flat();
}

function walkBFNode(node, acc, level) {
  if (!node) {
    return;
  }

  const { data, left, right } = node;
  const list = acc[level] || [];
  list.push(data);
  acc[level] = list;
  walkBFNode(left, acc, level + 1);
  walkBFNode(right, acc, level + 1);
}

module.exports = {
  makeNodeDF,
  walkDF,
  isBinarySearch,
  walkBF,
  makeNodeBF
};
