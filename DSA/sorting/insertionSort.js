const arr = [1, 4, 2, 5, 6, 8, 7];

// Time complexity
// best case: O(n) -> 1,2,3,4 -> comparisons -> 1 comparison for each element n time => 1*n=> O(n);
// Worst case: O(n^2) -> 4,3,2,1 -> comparisons -> 1+2+...+(n-1) = (n(n-1))/2 => O(n^2)
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

