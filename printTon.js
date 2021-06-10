const fun = (params) => {
  printToN(params);
};
const fun1 = (params) => {
  fun1(params);
};
const fun2 = (params) => {
  fun1(params);
};

fun1(10);
