function maxmizeProfit(array) {


    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;


    for( i=0 ;i< array.length;i++){

        if(array[i] < min) {
            min = array[i];
        }
        else if (array[i] - min > max) {
            max = array[i] - min;
        }

    }
    return max;

}

console.log(maxmizeProfit([7,1,5,6,3,4]));