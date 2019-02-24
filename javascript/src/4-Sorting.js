function selectionSort(array) {
  for (let len = array.length - 1; len > 0; len--) {
    let maxPos = 0;

    for (let i = 1; i < len + 1; i++) {
      if (array[i] > array[maxPos]) {
        maxPos = i;
      }
    }

    let temp = array[len];
    array[len] = array[maxPos];
    array[maxPos] = temp;
  }

  return array;
}

function bubbleSort(array) {
  for (let len = array.length - 1; len > 0; len--) {
    let sorted = true;

    for (let i = 0; i < len; i++) {
      const a = array[i];
      const b = array[i + 1];

      if (a > b) {
        array[i] = b;
        array[i + 1] = a;
        sorted = false;
      }
    }

    if (sorted) {
      return array;
    }
  }

  return array;
}

function insertionSort(array) {
  for (let lastIndex = 1; lastIndex < array.length; lastIndex++) {
    let lastValue = array[lastIndex];
    let currentIndex = lastIndex;

    for (; currentIndex > 0; currentIndex--) {
      let elB4last = array[currentIndex - 1];

      /**
       * already sorted
       */
      if (lastValue >= elB4last) {
        break;
      }

      array[currentIndex] = elB4last;
    }

    array[currentIndex] = lastValue;
  }

  return array;
}

function mergeSort(array) {
  let len = array.length;

  if (len < 2) {
    return array;
  }

  let mid = Math.floor(len / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);
  let lenLeft = left.length;
  let lenRight = right.length;

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < lenLeft && j < lenRight) {
    let leftEl = left[i];
    let rightEl = right[j];

    if (leftEl < rightEl) {
      array[k++] = leftEl;
      ++i;
    } else {
      array[k++] = rightEl;
      ++j;
    }
  }

  while (i < lenLeft) {
    array[k++] = left[i++];
  }

  while (j < lenRight) {
    array[k++] = right[j++];
  }

  return array;
}

module.exports = { selectionSort, bubbleSort, insertionSort, mergeSort };
