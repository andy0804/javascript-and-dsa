const countBinary = (params) => {
  let binaryNumber = params.toString(2).split("");
  let oneCount = 0;
  console.log(binaryNumber);
  for (let val of binaryNumber) {
    if (val === "1") {
      oneCount++;
    }
  }
  console.log(oneCount);
};

countBinary(4);
