

const co_ordinateOne = {
    x:1,
    y:2
  }


  const co_ordinateTwo = {
    x:10,
    y:22
  }

  function printCoorindates() {

    console.log(`${this.x}---${this.y}`)
  }

  const displayOne = printCoorindates.bind(co_ordinateOne);
  const displayTwo = printCoorindates.bind(co_ordinateTwo);

  displayOne();
  displayTwo();


