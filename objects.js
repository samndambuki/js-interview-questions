//WAYS TO CREATE AN OBJECT
//1. object literal
const person = {
  name: "Sam",
  age: "24",
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old `
    );
  },
};

console.log(person.age);
person.greet();

//using new object
const person1 = new Object();
person1.name = "John";
person1.age = "25";
person1.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
};

person1.greet();
