/**
 * Print items in the list that has
 *  #odd w/o any additional memory space
 *  {3,3,4,3,1,1} ==> 3,3,4,3
 */

const printOdd = (items) => {
  for (let num of items) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
};

printOdd([1, 2, 3, 4, 5]);
