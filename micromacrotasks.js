//MICRO TASKS
//microtasks are executed before macro tasks
//restaurant example
//1. microtasks - like quick urgent tasks. e.g finishing a half cooked dish
//2. macrotasks - like new orders from customers. placed in a queue and handled later

//js uses event loop to manage tasks
//micro task example - Promise.then()
//MutationObserver
//queueMicrotask()

//macrotasks example
//setTimeout
//setInterval
//setImmediate

console.log("start");
setTimeout(() => {
  console.log("Macrotask(setTimeout)");
}, 2000);

Promise.resolve().then(() => {
  console.log("Microtask(Promise.then)");
});

console.log("middle");
queueMicrotask(() => {
  console.log("MicroTask(queueMicroTask");
});
