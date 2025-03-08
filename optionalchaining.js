//OPTIONAL CHAINING OPERATOR - ?
//helps avoid unneccesary errors when accessing properties that might not exist

let user = {};
console.log(user.address?.city);

let person = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

console.log(person.address.city);
console.log(person.contact?.phone);

console.log(user.getDetails?.());

let students = [{ name: "john" }, { name: "jane" }];
console.log(students[2]?.name);
