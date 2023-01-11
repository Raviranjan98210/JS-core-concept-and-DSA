const rotateArray = arr => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
};

// method 2
const rotateArray2 = arr => {
  arr.slice(1).concat(arr.slice(0, 1));
};

console.log(rotateArray2([1, 24, 76, 3, 4, 5, 9]));

const ar = [1, 24, 76, 3, 4, 5, 9];

