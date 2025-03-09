//1. takes a function as an argument
//2. returns a function

//e.g takes a function as an argument
function greet(name, callback) {
  console.log("Hello," + name);
  callback(); // calls the function passed as an argument
}

function sayBye() {
  console.log("GoodBye");
}

greet("Alice", sayBye);

//2. returns a function
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const double = multiplyBy(2);
console.log(double(5));
console.log(double(10));
