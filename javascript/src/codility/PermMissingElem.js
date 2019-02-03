/**
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(array) {
  let len = array.length;
  let len1 = len + 1;
  let s = {};

  for (let i = 1; i <= len1; i++) {
    s[i] = i;
  }

  for (let i = 0; i < len; i++) {
    const e = array[i];
    delete s[e];
  }

  return Object.values(s)[0];
}

let r = solution([2, 3, 1, 5]);

console.log(r);
