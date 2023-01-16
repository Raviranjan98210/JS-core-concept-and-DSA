// const arr = [3, 1, 2, 5, 5];

// const findRepeatedElement = arr => {
//   let i = 0;
//   let j = arr.length - 1;
//   console.log(i, j);
//   while (i < j) {
//     console.log(i, j);
//     if (arr[i] === arr[j]) {
//       return arr[i];
//     }
//     i++;
//     j--;
//   }
// };
// let arr = [1, 2, 3, 2, 3, 1, 1, 2, 3, 3];
// let map = new Map();
// for (let i of arr) {
//   if (map.has(i)) {
//     let count = map.get(i);
//     map.set(i, count + 1);
//   } else {
//     map.set(i, 1);
//   }
// }
// console.log(map);

// console.log(findRepeatedElement(arr));

let arr = [1, 2, 3, 2, 3, 1, 4, 5, 6];
let map = new Map();
for (let i of arr) {
  if (map.has(i)) {
    let count = map.get(i);
    map.set(i, count + 1);
  } else {
    map.set(i, 1);
  }
}
console.log(map)
let duplicates = [...map.entries()].filter(elem => elem[1] == 2);
console.log(duplicates);
