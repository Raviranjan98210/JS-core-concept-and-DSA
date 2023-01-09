const arr = [1, 2, 3, 4];
const totalSum = arr.reduce((prevVal, currVal, index, arr) => currVal * prevVal, 1);
console.log(totalSum);

Array.prototype.myReduce = function (cb, initialVal) {
  let prevVal = initialVal;
  for (let i = 0; i < this.length; i++) {
    prevVal = cb(prevVal, this[i], i, this);
  }
  return prevVal;
};

const newProd = arr.myReduce((prevVal, currVal, index, arr) => currVal + prevVal, 3);
console.log(newProd);

