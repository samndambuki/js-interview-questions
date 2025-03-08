const person = {
  name: "Sam",
  age: 25,
  city: "London",
};

//get a list of keys
const keys = Object.keys(person);
console.log(keys);

//get a list of values
const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
