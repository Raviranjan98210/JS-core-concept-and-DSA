const arr = [1, 3, 6, 19, 409, 5, 9];

Array.prototype.myFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const newArr = arr.myFilter(el => el > 5);

console.log(newArr);

