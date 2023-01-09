// Bubble sort is a simple sorting algorithm that repeatedly iterates through the elements of an array, compares adjacent elements, and swaps them if they are in the wrong order. This continues until no more swaps are needed, at which point the array is considered to be sorted.

// ------------Steps --------------
// 1. Start with the first element in the array and compare it to the next/adjacent element. If the first element is greater than the second element, swap them.
// 2. Move on to the next pair of elements and repeat the comparison and swap if necessary.
// 3. Continue this process until you reach the end of the array.
// 4. If any swaps were made during the previous pass, repeat the process from the beginning. If no swaps were made, the array is considered to be sorted.

// Bubble sort has a time complexity of O(n^2), which makes it less efficient for larger arrays. However, it is a simple algorithm to understand and implement, and it can be useful for small arrays or as a learning exercise.

// Key: in i'th round/pass the i'th largest element would be at right place
const arr = [3, 2, 4, 29, 10, 3, 1];

const selectionSort = arr => {
  if (Array.isArray(arr)) {
    const size = arr.length;
    // Total round will be size of array minus 1 (i.e arr.length-1) because last remaining element would be implicitly at the right position if we run size-1
    for (let i = 1; i < size; i++) {
      let swapped = false;
      // why size-1?
      // Ans: Because ith round ith largest element would be at right position so we don't need to check it again
      for (let j = 0; j < size - i; j++) {
        if (arr[j + 1] < arr[j]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (swapped === false) break;
    }
    return arr;
  }
};

console.log(selectionSort(arr));

// Link: https://drive.google.com/file/d/1DScaSvG0TzAy2b9MF9CcEtzoOxvai3MY/view
// Click the above link to get better understanding

