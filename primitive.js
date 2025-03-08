//primitive types - simple values that are not objects
//they are stored directly in memory unlike objects which are stored by reference

//primitive types
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol
//7. BigInt

//can we call methods on primitive types?
//primitve types do not have methods because they are not objects
//but js temporarily wraps them within an object when calling a method
//the object dissapers after the method runs

//e.g calling a method on primitve type
let str = "hello";
console.log(str.toUpperCase());

let num = 42;
console.log(num.toString());
