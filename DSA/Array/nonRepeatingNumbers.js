// https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1

const arr = [1, 2, 3, 2, 1, 4];

const nonRepeatingNumbers = arr => {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  // Find right most set bit (rsmb)
  //  (~xor+1) -> -xor , way of finding 2's compliment of xor;
  const rmsbm = xor & -xor;

  let a = 0; // To find set bit of each element
  let b = 0; // To find unset bit of each element
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rmsbm) === 0) {
      a = a ^ arr[i];
    } else {
      b = b ^ arr[i];
    }
  }

  return a > b ? [b, a] : [a, b];
};

console.log(nonRepeatingNumbers(arr));

