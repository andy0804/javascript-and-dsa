/** 
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


1. Take the first number and compare with everyother number
2. If match found return the index of the first number and the match
3 . If not match found then jump to next number and remove the first number from the array
*/

console.log(driver());

function driver ()
 {
     let arr = [2 ,5, 8 ,11]
     const target = 10;
     const result = twoSumV3(arr,target);

     if(!result)

     return 'No sum found';
     
     else
     return result

 }

function twoSum (arr,target) {

    for(let i = 0 ;i <arr.length ;i++){

        for(j= i+1;j <arr.length;j++){

            if(arr[i] + arr[j] == target) {
                return[i,j];
            }
        }
    }
}

function twoSumV2(numArray, target){

    const numObject = {} //create an empty object
  
    for(let eachNum in numArray){
  


      if( target - numArray[eachNum] in numObject){
        return [eachNum,numObject[target - numArray[eachNum]]]
      }
  
      numObject[numArray[eachNum]] = eachNum    
  
    }
  
  }


  function twoSumV3(numArray , target){

   let map = new Map();
   let result = [];

   for( i = 0 ;i < numArray.length; i++){
    const difference = target - numArray[i];
    if(map.has(difference)){
        result[0] =map.get(difference);
        result[1] = i;
        return result;
    }
    map.set(numArray[i],i);

   }

   return result;

  }