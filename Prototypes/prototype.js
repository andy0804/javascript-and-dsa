Object.prototype.displayHello = function () {
  return "Example of an Object displaying hello";
};

let anyObject = {};

let mess = anyObject.displayHello();
console.log("Message", mess);

anyObject.__proto__.firstName = "Default first name";

console.log(anyObject.firstName);
