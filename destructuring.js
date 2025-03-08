//DESTRUCTURING - unpacking values from arrays or objects and assigning them to variables in a clean and easy way
//extract values from an array into separate variables
let fruits = ["apple", "banana", "mango"];
let [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);

//object destructuring
let user = { name: "Alice", age: 25, country: "UK" };
let { name, age, country } = user;
console.log(name);
console.log(age);
console.log(country);
