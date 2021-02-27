/**
 *   #
    ##
   ###
  ####
 #####
######
 */

const stairCase = (n) => {
  // out loop runs n times
  for (let i = 0; i < n; i++) {
    // j loop to run n-1 times  to print spaces
    // spaces would decrement on each iteration
    for (let j = i; j < n - 1; j++) {
      process.stdout.write(" ");
    }
    // k loop to print # and this will print # based on the current row we are on
    for (let k = 0; k <= i; k++) {
      process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

stairCase(4);
