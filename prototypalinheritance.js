//PROTOTYPAL INHERITANCE
//Grandma - Mom - Son
//you inherit traits(like hair color,eye color) from mom
//mom inherits from grandma
//if you dont have something, js checks for mom, if mom doesnt have it, js checks for grandma

// this is just how js objects inherits properties and methods from a prototype

//every js object has a prototype from which it inherits properties and methods from

//EXAMPLE 1
let person = {
  greet: function () {
    console.log("Hello I am a person");
  },
};

let student = Object.create(person);
student.study = function () {
  console.log("I am studying");
};

student.greet();
student.study();
