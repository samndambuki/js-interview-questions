//how to check presence of a property
//1. obj.hasOwnProperty()
//2. in obj

const obj = {
  year: 2023,
  name: "john",
};

// console.log(obj.hasOwnProperty("year"));
// console.log("name" in obj);
// console.log("sam" in obj);
// console.log("john" in obj);

//how to access object property
//static - using . notation
console.log(obj.name);
//dyncmic using square brackets
console.log(obj["year"]);
