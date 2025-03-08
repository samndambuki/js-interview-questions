//CONSTRUCTOR FUNCTION - a regular function that can be used to create multiple objects with same properties and methods.
//it starts with a capital letter

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello,my name is ${this.name}`);
  };
}

//creating new objects with the cpnstructor function
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name);
console.log(person1.age);

person1.sayHello();
person2.sayHello();
