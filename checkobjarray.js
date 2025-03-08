//HOW TO CHECK IF AN OBJECT IS AN ARRAY
const obj1 = { person: "Sam" };
const obj2 = new Array(2);
const obj3 = [];

console.log(Array.isArray(obj1));
console.log(Array.isArray(obj2));
console.log(Array.isArray(obj3));
