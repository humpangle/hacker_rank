// https://app.codility.com/demo/results/training626WQR-MGC/

/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(n) {
  n = n.toString(2);
  // console.log(n);

  let p = /(10+1)|(0+1)/g;
  let d = n.match(p);
  if (!d) {
    return 0;
  }
  d = d.map(x => x.replace(/1/g, "").length);
  return Math.max(...d);
}

function solution1(n) {
  n = n.toString(2);
  let len = n.length - 1;

  let max = 0;
  let sum = 0;

  for (let i = 1; i < len; i++) {
    if (n[i] === "1") {
      if (sum > max) {
        max = sum;
      }

      sum = 0;
      // eslint-disable-next-line no-continue
      continue;
    }
    ++sum;
  }

  sum = n[len] === "1" ? sum : 0;

  return max > sum ? max : sum;
}

module.exports = {
  solution,
  solution1
};
