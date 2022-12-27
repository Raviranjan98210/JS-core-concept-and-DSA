const arr = [1, 2, 3, 4, 5];

const reversArray = (i, arr, arrSize) => {
  console.log(i);
  console.log(arr);
  console.log(arrSize);
  if (i >= arrSize / 2) {
    return;
  }
  // Swapping element of array
  [arr[i], arr[arrSize - i - 1]] = [arr[arrSize - i - 1], arr[i]];

  reversArray(++i, arr, arrSize);
};
reversArray(0, arr, arr.length);
console.log(arr);

