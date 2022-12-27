// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
//   console.log("Hello Ravi");
// }

// x();

// const d = document.querySelectorAll("div");

// d.forEach(h =>
//   h.addEventListener(
//     "click",
//     function cb(e) {
//       console.log(e, "E");
//       console.log(e.target.id);
//     },
//     true
//   )
// );

var v = 10;
function fun1() {
  console.log(this);
  console.log(v);
}

function fun2() {
  var v = 20;
  fun1();
}

fun2();

