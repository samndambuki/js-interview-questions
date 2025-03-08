//GENERATOR FUNCTIONS ALLOW YOU TO PAUSE EXECUTION AND RESUME LATER
//regular functions run once from start to end
//generator functions can pause and resume multiple times

function* simpleGenerator() {
  //yield is used to pause execution
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
