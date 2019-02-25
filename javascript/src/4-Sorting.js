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
  for (let backIndex = 1; backIndex < array.length; backIndex++) {
    const back = array[backIndex];
    let insertionIndex = backIndex;

    for (; insertionIndex > 0; insertionIndex--) {
      const front = array[insertionIndex - 1];

      /**
       * Already sorted
       */
      if (back >= front) {
        break;
      }

      array[insertionIndex] = front;
    }

    array[insertionIndex] = back;
  }

  return array;
}

function mergeSort(array) {
  let len = array.length;

  if (len < 2) {
    return array;
  }

  let mid = Math.floor(len / 2);
  let leftArray = mergeSort(array.slice(0, mid));
  let rightArray = mergeSort(array.slice(mid));
  let leftLen = leftArray.length;
  let rightLen = rightArray.length;
  let leftIndex = 0;
  let rightIndex = 0;
  let index = 0;

  while (leftIndex < leftLen && rightIndex < rightLen) {
    let leftVal = leftArray[leftIndex];
    let rightVal = rightArray[rightIndex];

    if (leftVal < rightVal) {
      array[index++] = leftVal;
      ++leftIndex;
    } else {
      array[index++] = rightVal;
      ++rightIndex;
    }
  }

  while (leftIndex < leftLen) {
    array[index++] = leftArray[leftIndex++];
  }

  while (rightIndex < rightLen) {
    array[index++] = rightArray[rightIndex++];
  }

  return array;
}

module.exports = { selectionSort, bubbleSort, insertionSort, mergeSort };
