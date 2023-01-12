const rotateArray = (arr, k, dir) => {
  const n = arr.length;
  if (dir === "left") {
    return rotateLeft(arr, n, k);
  } else {
    return rotateRight(arr, n, k);
  }
};

const rotateLeft = (arr, n, k) => arr.slice(k).concat(arr.slice(0, k));
const rotateRight = (arr, n, k) => {
  const temp = [];
  for (let i = 0; i < n; i++) {
    temp[(i + k) % n] = arr[i];
  }
  return [...temp];
};
rotateArray([3, 7, 8, 9, 10, 11], 3, "left");

