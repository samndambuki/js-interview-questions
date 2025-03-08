//in js, objects are compared by reference not by value
//even if two objects look the same they are compared by reference not value

//example 1
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2);

//example2
let obj3 = { name: "Sam" };
let obj4 = obj3;
console.log(obj3 === obj4);
