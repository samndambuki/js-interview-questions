//its like spreading butter on toast
//it takes something like an array or object then its spreads its elements or properties out

//1. copying an array
let original = [1, 2, 3];
let copy = [...original];

// console.log(copy);

//2. merging arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = [...arr1, ...arr2];

//3. spreading in function arguments
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];

// console.log(sum(...numbers));

//4. copying and merging objects
let person = { name: "Alice", age: 25 };
let updatedPerson = { ...person, city: "London" };

console.log(updatedPerson);
