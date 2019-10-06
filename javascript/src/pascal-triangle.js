/**
 * @param {number} numRows
 * @return {number[][]}
 */
export function pascalTriangleNonRecursive(numRows) {
  if (numRows === 0) return [];

  const triangle = [];

  for (let i = 1; i <= numRows; i++) {
    const row = Array(i);
    row[0] = 1;
    row[i - 1] = 1;
    const prev = triangle[i - 2] || [];

    for (let j = 1; j < i - 1; j++) {
      row[j] = prev[j - 1] + prev[j];
    }

    triangle.push(row);
  }

  return triangle;
}

export function pascalTriangleRecursive(params) {
  const memo = {};

  return (function execute(level) {
    const fromMemo = memo[level];

    if (fromMemo !== undefined) {
      return fromMemo;
    }

    if (level === 0) {
      return [];
    }

    const prev = execute(level - 1);
    const result = Array(level);
    result[0] = 1;
    result[level - 1] = 1;

    let index = 0;
    const len = level - 2;

    for (; index < len; index++) {
      result[index + 1] = prev[index] + prev[index + 1];
    }

    memo[level] = result;
    return result;
  })(params);
}

