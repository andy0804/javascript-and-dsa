

function coinChange(amount, coins){

    let combinations = new Array(amount+1).fill(amount+1);

    combinations[0] = 0;


        for( i = 0 ; i <= amount; i++) {

            for( j = 0 ; j < coins.length ; j++){

                if( i >= coins[j]){
                    combinations[i] = Math.min(combinations[i], 1 + combinations[i - coins[j]])
                }
            }
            
        }

    
    return combinations[amount]
}


let result =  coinChange(12,[1,2,5]);
console.log(result);