//FUNCTION DECLARATION
//1. can be called before its defined - hoisting
//2. starts with function keyword before assigning to variable

// sayHello();
// function sayHello() {
//   console.log("Hello");
// }

//FUNCTION EXPRESSION
//1. cannot be called before its defined
//2. stored inside a variable
//3. can be anonymous or unnamed

const greet = function () {
  console.log("Hi there");
};

greet();
