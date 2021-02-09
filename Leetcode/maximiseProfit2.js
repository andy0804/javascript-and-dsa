/**
 * 
 * Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
[7,1,5,3,6,4]

Set 7 as the initial stock price
Profit = 0 ;
Examine 1 , is 1 < Prev brought stock price 
set Min  = 1 
Examine 5 , is 5 greater than MIN , then  calcuate Profit as 4
Examin 3 and also examine if we have sold if yes , then set Min as 3
Examine 6 is 6 greater than 3 , YES then SELL and calculate profit. We are now at 7 
 */

const maximizeProfitLeet2 = (daysList) => {
  if (!daysList) {
    return 0;
  }
  let profit = 0;
  for (let i = 0; i < daysList.length - 1; i++) {
    if (daysList[i + 1] > daysList[i]) {
      profit += daysList[i + 1] - daysList[i];
    }
  }
  return profit;
};

const maximixedProfit = maximizeProfitLeet2([7, 1, 5, 3, 6, 4]);
console.log("Profit", maximixedProfit);
const maximixedProfit2 = maximizeProfitLeet2([1, 2, 3, 4, 5]);
console.log("Profit", maximixedProfit2);
