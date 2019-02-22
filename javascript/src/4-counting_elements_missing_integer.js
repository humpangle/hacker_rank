/**
 * https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 * 
 * This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(a) {
  let max = 0;
  let memo = {};

  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    memo[el] = true;
    if (el > max) max = el;
  }

  if (max < 1) return 1;

  for (let i = 1; i < max; i++) {
    if (!memo[i]) return i;
  }

  return max + 1;
}

module.exports = { solution };
