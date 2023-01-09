const arr = [1, 2, 3, 4];
Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const newArr = arr.myMap((el, i, arr) => el * 2);

console.log(newArr);

