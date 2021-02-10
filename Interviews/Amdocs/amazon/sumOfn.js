const sum = (param1) => {
  return function (param2) {
    if (param2) return sum(param1 + param2);
    else {
      return param1;
    }
  };
};

const result = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();
console.log("sum", result);
