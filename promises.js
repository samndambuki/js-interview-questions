//why use promises instead of callbacks
//callbacks can be hard and messy to read
//we have multiple nested callbacks which is messy
// function getData(callback) {
//   setTimeout(() => {
//     callback("data received");
//   }, 2000);
// }

// getData((message) => {
//   console.log(message);
// });

//promises are cleaner and better
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data received");
//     }, 2000);
//   });
// }

// getData().then((message) => {
//   console.log(message);
// });

//eg.2 for promises
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;
//       if (success) {
//         resolve("data received");
//       } else {
//         reject("error:data not received");
//       }
//     }, 2000);
//   });
// }

// getData()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async await is the simplest form

//async - takes time
// async function getData() {
//   let message = await getData(); //-wait until it finishes
//   console.log(message);
// }

// getData();

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data received");
    }, 2000);
  });
}

async function fetchData() {
  let message = await getData();
  console.log(message);
}

fetchData();
