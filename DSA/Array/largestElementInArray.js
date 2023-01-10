const arr = [1, 23, 34, 98, 5, 2, 9];

// Brute force
const largestElement = arr => {
  const n = arr.length;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// Method - 2
import selectionSort from "../sorting/selectionSort";
const largestElement2 = arr => {
  selectionSort(arr);
  return arr[arr.length - 1];
};

// Method:3
const largestElement3 = arr => Math.max(...arr);

console.log(largestElement(arr));
console.log(largestElement2(arr));
console.log(largestElement3(arr));

