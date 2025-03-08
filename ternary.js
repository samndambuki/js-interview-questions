//tenary operator - shorthand for writing if else statement in a single line
// syntax condition ? value_if_true : value_if_false

//checking age
let age = 18;
let message = age >= 18 ? "you can vote" : "you cannot vote";
console.log(message);

//even or odd number
let num = 7;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(type);

//nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);
