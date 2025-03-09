// a pure function - 1. always returns the same output for the same input
//2. has not side effects, does not modify external varibales

//e.g - pure function
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // same output for the same input
// console.log(add(2, 3));
// console.log(add(2, 3));

//e.g impure function
let total = 0;
function addTotal(num) {
  total += num; // modifies external variable
  return total;
}
console.log(addTotal(5));
console.log(addTotal(5)); // different output for the same input
console.log(addTotal(5));
