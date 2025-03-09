function calculator() {
  let result = 0;
  return {
    plus(val) {
      result += val;
      return this; //allows chaining
    },
    minus(val) {
      result -= val;
      return this;
    },
    multiply(val) {
      result *= val;
      return this;
    },
    divide(val) {
      if (val !== 0) result /= val;
      return this;
    },
    get() {
      console.log(result);
      return this;
    },
  };
}

let calc = calculator();
calc.plus(5).minus(2).multiply(3).divide(1).get();
