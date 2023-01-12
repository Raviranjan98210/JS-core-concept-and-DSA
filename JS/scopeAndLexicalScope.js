function employee() {
  var name = "Ravi Ranjan Kumar";
  var designation = "Frontend Developer";
  profile();
  function profile() {
    console.log(greeting + " " + name + "'s profile is: " + designation);
  }
}
var greeting = " Hello";

employee();

