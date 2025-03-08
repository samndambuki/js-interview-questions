//ES6 - Ecmascript 2015
//updated version of javascript that came with new featires that made code elaner and easier

//1. de structuring
//2. spread operator
//3. let and const
//4. arrow functions

//arrow functions
const greet = (name) => `Hello ${name}`;
console.log(greet("Sam"));

const add = (a, b) => a + b;
console.log(add(1, 2));

const hello = () => "Hello world";
console.log(hello());

const multiply = (a, b) => {
  let result = a * b;
  return result;
};

console.log(multiply(4, 5));

let multiply2 = (a, b) => a * b;
console.log(multiply2(6, 6));
