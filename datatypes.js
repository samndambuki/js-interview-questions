// 8 data types in js
//dynamically typed - variable at one time store a string then at another time a number
let messsage = "hello world";
message = 123;

//1. number types - integer and floating numbers
let n = 123;
n = 12.345;
//infinity - special number greater than any number
// console.log(1 / 0);
//nan - computational error
// console.log("not a number" / 2);

//bigInt
const z = 1234567890123456789012345678901234567890n;

//2. string
//double quotes
//single quotes
//back ticks - allows us to embed variables and strings
let name = "john";
// console.log("Hello ${name}");
// console.log(`Hello ${name}`);
// console.log(`the result is ${1 + 2}`);

//3. boolean(has two values true or false) // logical type
let nameFieldChecked = true;
let ageFieldChecked = false;
//comparisons
let isGreater = 4 > 1;
// console.log(isGreater);

//4. null -value is unknown
// let age = null;

//5. undefined - value is not assigned
// let age;
// console.log(age);

let age = 100;
age = undefined;
console.log(age);

//all the above are primitive meaning - values can only contain a single thing

//6. objects and symbols
//objects - store a collection of data

//typeof operator
typeof 0;
