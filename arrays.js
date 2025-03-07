//main methods of working with arrays
//ADDING AND REMOVING ELEMENTS

//1. shift - removes and returns the first element
let arr = [1, 2, 3, 4, 5];
let first = arr.shift();
// console.log(first);

//2. pop - removes and returns the last element
let last = arr.pop();
// console.log(last);

//3. unshift
arr.unshift(0);
let add = arr.unshift(0);
// console.log(add);
// console.log(arr);

//4.push
// arr.push(6);
let added = arr.push(6);
// console.log(added);

//ITERATING OVER ARRAYS
//foreach - executes a function on each array element. does not return a new array
let numbers = [1, 2, 3];
// numbers.forEach((num) => console.log(num * 2));

//map - creates a new array by transforming each element
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
