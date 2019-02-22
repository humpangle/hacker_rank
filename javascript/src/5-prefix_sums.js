/**
 * There is a simple yet powerful technique that allows for the fast calculation of sums of
elements in given slice (contiguous segments of array). Its main idea uses prefix sums which
are defined as the consecutive totals of the first 0, 1, 2, . . . , n elements of an array.
a0 a1 a2 . . . an−1
p0 = 0 p1 = a0 p2 = a0 + a1 p3 = a0 + a1 + a2 . . . pn = a0 + a1 + . . . + an−1
We can easily calculate the prefix sums in O(n) time complexity. Notice that the total pk
equals pk−1 + ak−1, so each consecutive value can be calculated in a constant time
 */

function prefixSums(array) {
  let len = array.length + 1;
  let result = Array(len).fill(0);

  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] + array[i - 1];
  }

  return result;
}

module.exports = { prefixSums };
