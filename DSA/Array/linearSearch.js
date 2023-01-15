const linearSearch = (arr, el) => arr.indexOf(el);

// method -2
const linearSearch2 = (arr, el) => {
  const index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
};

console.log(linearSearch2([1, 2, 3, 4, 5], 5));

