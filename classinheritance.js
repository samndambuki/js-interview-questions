//imagine you have a basic car which is a (parent class) and you want to create  a sports car (child class)
//with extra features

//instead of building everyhting from scratch, you just inherit from the basic car and add new features

//PARENT CLASS
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log("Generic animal sound");
  }
}

//creating an instance of an animal
const animal = new Animal("Generic Animal");
animal.makeSound();
console.log(animal.name);

//CHILD CLASS
class Dog extends Animal {
  constructor(name, breed) {
    //we call the parent class constructor
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!woof!");
  }
}

const myDog = new Dog("Buddy", "German shepherd");
console.log(myDog.name);
myDog.makeSound();

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  makeSound() {
    console.log("Meow");
  }
  showColor() {
    console.log(`this ${this.name} is a ${this.color} cat`);
  }
}

//creating a cat instance
const myCat = new Cat("Whiskers", "black");
console.log(myCat.name);
myCat.makeSound();
myCat.showColor();
