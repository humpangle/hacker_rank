const {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort
} = require("./4-Sorting");

const data = [
  [[5, 2, 8, 14, 1, 16], [1, 2, 5, 8, 14, 16]],
  [[54, 26, 93, 17, 77, 31, 44, 55, 20], [17, 20, 26, 31, 44, 54, 55, 77, 93]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
];

test("bubbleSort", () => {
  data.forEach(([a, b]) => expect(bubbleSort([...a])).toEqual(b));
});

test("selection sort", () => {
  data.forEach(([a, b]) => expect(selectionSort([...a])).toEqual(b));
});

test("insertionSort", () => {
  data.forEach(([a, b]) => expect(insertionSort([...a])).toEqual(b));
});

test("mergeSort", () => {
  data.forEach(([a, b]) => expect(mergeSort([...a])).toEqual(b));
});
