//think of it like you are baking a cake but instead of waiting at the oven,
//you set a timer and do other things while the cake bakes.
//when the timer rings you check if the cake is ready

//async - function does things that takes time
//await- wait here until its done but dont freeze anything

function bakeCake() {
  return new Promise((resolve, reject) => {
    console.log("Baking the cake");
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Cake is ready");
      } else {
        reject("run out of ingredients");
      }
    }, 2000);
  });
}

async function makeCake() {
  //marks the function as doing something that takes time
  try {
    let result = await bakeCake(); // waits for bake cake to finish // waits for the cake to be ready before moving to the next step
    console.log("Success", result);
  } catch (error) {
    console.log("Error", error);
  }
}

//try catch - handles the success or failure without using .then and .catch

makeCake();
