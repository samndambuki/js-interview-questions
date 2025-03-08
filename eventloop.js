//MAKES SURE JS DOESNT FREEZE WHEN WAITING FOR SLOW TASKS
//JS IS single threaded - can only do one task at a time

//PRACTICAL EXAMPLE - A CHEF
//1. imagine js as a chef. does one thing at a time, because being single threaded, it can only do one thing at a time
//2. some tasks like boling water take some time. instead of waiting, the chef starts another task like cutting vegetables while the water boils
//3. then the chef checks back on the water when its ready and continues cooking

//runs first(synchronous)
console.log("Start");

//asynchronous task
setTimeout(() => {
  console.log("Inside timeout(oms)");
}, 0);

setTimeout(() => {
  console.log("Inside timeout(2000ms)");
}, 2000);

console.log("End");
