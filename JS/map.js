const map1 = new Map();

for (let i = 0; i < 4; i++) {
  map1.set(i, i + 1);
}

console.log(map1);

map1.delete(0);
console.log(map1);

