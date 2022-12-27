// const x = () => {
//   const a = 10;
//   const y = () => {
//     const b = 200;
//     console.log(a);
//     console.log(b);
//   };
//   return y;
// };

// const z = x();
// console.log(z);
// z();

// Example 2

function a() {
  let name = "Ravi";
  function b() {
    console.log(name);
  }
  name = "Harsh";
  return b;
}

const c = a();
c();

