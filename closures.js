//closure - a function that allows inner function to access a variable in the outer function even when
//the outer function is no longer in memory or has finished executing

function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter();
counter();
