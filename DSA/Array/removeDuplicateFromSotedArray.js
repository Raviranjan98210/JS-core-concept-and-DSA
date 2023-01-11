const removeDuplicate = arr => {
  const n = arr.length;
  let i = 0;
  j = 1;
  while (j < n) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return arr.splice(0, i + 1);
};

console.log(removeDuplicate([2, 2, 2, 2, 2]));

