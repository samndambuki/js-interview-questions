//set - data structure in js that allows to store unique values
//map - data structure in js that allows to store key value pairs

//duplicates are not allowed
const mySet = new Set([1, 2, 3, 4, 4, 4, 5, 5, 5, 6, 7]);
// console.log(mySet);

//map stores key value pairs
const myMap = new Map();
myMap.set("name", "sam");
myMap.set(42, "the answer");
myMap.set(true, "yes");
console.log(myMap.get("name"));
console.log(myMap.get(42));
console.log(myMap.get(true));
