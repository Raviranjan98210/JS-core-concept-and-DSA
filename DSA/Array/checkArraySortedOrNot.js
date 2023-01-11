const sortedOrNot = arr => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(sortedOrNot([1, 2, 3, 3]));

