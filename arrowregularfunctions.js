// var firstName = "John";

// let myDetails = {
//   firstName: "Samuel",
//   printName: function () {
//     console.log(`Hi ${this.name}`);
//   },
//   //arrow function will hold the lexical scope which is the global object
//   greet: () => {
//     // console.log(this);
//     console.log(`Hello sir ${this.firstName}`);
//   },
// };

// // myDetails.printName();
// myDetails.greet();

// name = "Sam";
let myDetails = {
  name: "Sam",
  regularFunction: function () {
    console.log(this.name);
  },
  //lexically bound
  //refers to value from the surrounding scope
  arrowFunction: () => {
    console.log(this.name);
  },
};

// myDetails.regularFunction();
// myDetails.arrowFunction();

//arguments
function regularFunc() {
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(arguments);
};

regularFunc(1, 2, 3, 4);
arrowFunc(1, 2, 3, 4);
