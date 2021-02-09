Object.prototype.displayHello = function () {
  return "Example of an Object displaying hello";
};
Array.prototype.addOne = function () {
  console.log(this);
  return this + 1;
};

let anyObject = {};

let mess = anyObject.displayHello();
console.log("Message", mess);

anyObject.__proto__.firstName = "Default first name";

console.log(anyObject.firstName);

Array.prototype.addOne = function (fun) {
  var filtered = [];
  // for (let i = 0; i < this.length; i++) {
  //   if (fun(this[i], i, this)) filtered.push(this[i]);
  // }

  // this.forEach((i) => {
  //   if (fun(this[i], i, this)) filtered.push(this[i]);
  // });
  // return filtered;
  this.forEach((i) => {
    if (fun(this[i], i, this)) filtered.push(fun(this[i], i, this));
  });
  return filtered;
};

Array.prototype.customFilter = function (fun) {
  var filtered = [];

  this.forEach((i) => {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  });
  return filtered;
};

var updatedArray = [1, 2, 3, 4, 5, 6].addOne(function (element, index, arr) {
  return element + 5;
});

var filteredArray = [1, 2, 3, 4, 5, 6].customFilter(function (
  element,
  index,
  arr
) {
  return element > 5;
});

console.log("Filtered", filteredArray);
console.log("Updated", updatedArray);
