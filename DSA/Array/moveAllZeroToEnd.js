console.log([1, 2, 0, 2, 0, 0, 9].filter(i => i > 0));

// 1,2,2,9,0,0,0

const moveZeroToEnd = arr => {
  const temp = arr.filter(i => i > 0);
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

// Method - 2 optimized solution
const moveZeroToEnd2 = arr => {
  const n = arr.length;
  let i = arr.indexOf(0);
  let j = i + 1;
  while (i < n - 1 && j < n) {
    if (arr[i] === 0) {
      if (arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j++;
      } else {
        j++;
      }
    } else {
      i++;
    }
  }
  return arr;
};
console.log(moveZeroToEnd2([1, 2, 0, 2, 0, 0, 9]));

// 2 3 1 0 0 4 0 3
//       i   j
// 2 3 1 4 0 0 0 3
//         i     j
// 2 3 1 4 3 0 0 0

