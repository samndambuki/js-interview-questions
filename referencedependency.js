//REFERENCE DEPENDENCY
//think of an object in js like a house and the variable that holds it as a house address

let house1 = { color: "blue" };
let house2 = house1; // this is not a new house, just another address to the same house

//both house1 and house2 both point to the same house(object in memory)
house2.color = "red";
// console.log(house1.color);

//house 1 also changes because its the same house

//WHY?
//in js - objects are stored in memory and vartiables store a reference to them
//so, when you do
//let obj2 = obj1
//you are not copying the object, you are just making a reference to the object

//HOW TO AVOID REFERENCE DEPENDECY
//1. SPREAD OPERATOR
let newHouse = { ...house1 };
newHouse.color = "green";
console.log(house1.color);
console.log(newHouse.color);

//2. JSON.parse(JSON.stringify(obj))
//creates a deep copy, even nested objects wont be linked
let original = { name: "Alice", details: { age: 25 } };
let copy = JSON.parse(JSON.stringify(original));

copy.details.age = 30;
console.log(original.details.age);
