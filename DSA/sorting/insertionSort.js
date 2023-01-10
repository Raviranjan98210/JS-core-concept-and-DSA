const arr = [1, 4, 2, 5, 6, 8, 7];

// Time complexity
// best case: O(n)
// Worst case: O(n^2)
const insertionSort = arr => {
  if (Array.isArray(arr)) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const temp = arr[i];
      let j = i - 1;
      while (j >= 0) {
        if (arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        } else {
          break;
        }
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
};

console.log(insertionSort(arr));

