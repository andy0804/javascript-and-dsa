// function someAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log("I am executed after 3 seconds");
//       resolve(true);
//     }, 3000);
//   });
// }
function someAsync() {
  setTimeout(function () {
    console.log("I am executed after 3 seconds");
    return "resolved";
  }, 3000);
}

async function myAsynFun() {
  console.log("Start");
  await promisify(someAsync)();
  console.log("end");
}

function promisify(f) {
  return function (...args) {
    // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      resolve(f.call(this, ...args));
    });
  };
}

myAsynFun();
