//how to check which class an object was created from

//example 1
class Person {}
const person = new Person();
// console.log(person instanceof Person);

//example 2
class Animal {}
class Dog extends Animal {}

let myDog = new Dog();
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(myDog instanceof Object);
console.log(myDog instanceof Array);
