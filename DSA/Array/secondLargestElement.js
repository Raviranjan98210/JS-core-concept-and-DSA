const print2Largest = arr => {
  const n = arr.length;
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (i === maxIndex) {
      continue;
    }
    if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};
// method
const print2Largest2 = arr => {
  let [max, secondMax] = arr.reduce(
    (acc, val) => {
      console.log(acc);
      if (val > acc[0]) {
        return [val, acc[0]];
      } else if (val > acc[1] && val < acc[0]) {
        return [acc[0], val];
      } else {
        return acc;
      }
    },
    [-Infinity, -Infinity]
  );
  return secondMax;
};

// Method 3

const print2Largest3 = arr => {
  const n = arr.length;
  if (n < 2) return -1;
  let large = Integer.MIN_VALUE;
  let second_large = Integer.MIN_VALUE;
  let i;
  for (i = 0; i < n; i++) {
    if (arr[i] > large) {
      second_large = large;
      large = arr[i];
    } else if (arr[i] > second_large && arr[i] != large) {
      second_large = arr[i];
    }
  }
  return second_large;
};
console.log(print2Largest2([12, 35, 1, 10, 34, 1]));

