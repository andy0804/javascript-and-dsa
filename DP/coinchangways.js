

function coinChange(amount, coins){

    let combinations = new Array(amount+1).fill(0);

    combinations[0] = 1;

    for ( let coin of coins){

        for( i = 1 ; i < combinations.length; i++) {

            if(i >=coin){
                combinations[i] = combinations[i] + combinations[i - coin];
            }
        }
    }
    return combinations[amount]
}


let result =  coinChange(12,[1,2,5]);
console.log(result);