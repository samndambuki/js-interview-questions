//code that will log the time spent on the site in seconds after every ten seconds

let time = 0;
setInterval(() => {
  time += 10;
  console.log(time);
}, 10000);
