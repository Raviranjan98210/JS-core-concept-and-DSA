const binarySearch = (arr, el) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === el) {
      return 1;
    } else if (arr[middle] < el) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));

// Time complexity -> O(logn)

