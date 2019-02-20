function pascalTriangle1(params) {
  const memo = {};

  (function execute(level) {
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

    for (let index = 0; index < level - 2; index++) {
      result[index + 1] = prev[index] + prev[index + 1];
    }
    memo[level] = result;
    return result;
  })(params);

  return Object.values(memo);
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function pascalTriangle2(numRows) {
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

function pascalTriangle3(params) {
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

    for (let index = 0; index < level - 2; index++) {
      result[index + 1] = prev[index] + prev[index + 1];
    }
    memo[level] = result;
    return result;
  })(params);
}

// Array.from({ length: 5 }, (_, i) => i + 1).forEach(i =>
//   console.log(i, pascalTriangle1(i))
// );

module.exports = {
  pascalTriangle1,
  pascalTriangle2,
  pascalTriangle3
};
