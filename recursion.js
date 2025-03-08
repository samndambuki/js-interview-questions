//RECURSION - when a function calls itself to solve a smaller problem until it reaches a stoppoing point
//1. without recursion
// function countDown(n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// }

// countDown(5);

//with recurssion
function countDown(n) {
  if (n === 0) return; //base case
  console.log(n);
  countDown(n - 1); //recursive call
}

countDown(5);
