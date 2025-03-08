//scenario
//ordered a cake from a bakery
//they tell you we will bake the cake and let you know when its ready. thats a promise in javascript

//1. when the cake is baking you can do other things like setting up the table
//2. when the cake is ready, the bakery calls you they tell you(this is the fulfilled state )
//3. if something goes wrong,like they run out of flour they tell you(rejected state)

//in js, a promise works the same way
//it waits for something to finish like fetching data then tells you if it was successful or failed

function bakeCake() {
  return new Promise((resolve, reject) => {
    console.log("Baking the cake");
    setTimeout(() => {
      let success = false; //change to false to simulate failure
      if (success) {
        resolve("Cake is ready");
      } else {
        reject("run of of ingredients");
      }
    }, 2000); // simulate baking time
  });
}

//use the promise
bakeCake()
  .then((message) => console.log("success", message)) //if promise is resolved
  .catch((error) => console.log("Error", error)); //if promise is rejected
