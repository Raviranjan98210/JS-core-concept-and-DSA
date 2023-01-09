// This implementation of selection sort sorts the elements of the array in ascending order. The outer loop iterates over the elements of the array, and the inner loop finds the minimum element in the unsorted part of the array. If the minimum element is not already at the correct position (i.e., i), it is swapped with the element at the current position (i).

const arr = [3, 2, 4, 29, 10, 3, 1];

const selectionSort = arr => {
  if (Array.isArray(arr)) {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < size; j++) {
        if (arr[j] < arr[minIndex]) minIndex = j;
      }
      // Swapping
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
};

console.log(selectionSort(arr));

