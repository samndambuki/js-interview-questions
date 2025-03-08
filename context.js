//WHAT IS CONTEXT IN JS
//imagine you have a recipe book

//1. if you the owner look at the recipe yoiu know the ingredients
//2. if someone else takes the book they now see the recipe with their own perspective

//in js - functions have a context which is just who owns or calls the function. that who is called this

//sometimes a function loses its owner just like a lost recipe book
let grandma = {
  name: "Grandma",
  sayHello: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

//we stored the function inside hello so it forgot who grandma is
let hello = grandma.sayHello;
hello();

//how to fix this
//1. call() - tells the function hey grandma is this now
hello.call(grandma);
//2. bind() - makes sure this does not get lost again
let boundhello = hello.bind(grandma);
boundhello();
