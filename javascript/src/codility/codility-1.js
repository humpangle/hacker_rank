/**
 * Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(array) {
  array.sort();
  let len = array.length;
  let l = array[len - 1];

  if (l < 1) {
    return 1;
  }

  if (l - array[len - 2] === 1) {
    return l + 1;
  }

  return l - 1;
}

// let r = solution([1, 3, 6, 4, 1, 2]);
// let r = solution([1, 2, 3]);
// let r = solution([-1, -2, -3]);
let r = solution([1, -1, 3]);

console.log(r);
