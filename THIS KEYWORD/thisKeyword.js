let obj = {
  firstname: "Ananth",

  getNameES6: function () {
    return () => {
      console.log("ES6" + this.firstname);
      return this.firstname;
    };
  },
  getNameES5: function () {
    return function () {
      console.log("ES5" + this.firstname);
      return this.firstname;
    };
  },
};

var print1 = obj.getNameES5();
var print2 = obj.getNameES6();

print1();
print2();
