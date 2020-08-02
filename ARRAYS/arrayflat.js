const array = [1,[2,[3],4],[5]]

// let results = [];

// console.log(flatten(array));
//  console.log(results)

// function flatten(array) {

//     if(!array.length) {
//         return results;
//     }
   
//     if(!array[0].length){

//         if(array[0].length!==0){
//         results.push(array[0])
//         }
//         array.shift();
//         flatten(array);
//     } else {
//         const element = array[0].shift()
//         console.log('Pushing..' + element)
//         array.push(element)
//         flatten(array);
//     }

 





function flatten (array) {
    let res = [];
 
    array.forEach(value=>{
     if(Array.isArray(value)){
 
         res = res.concat(flatten(value));
     }else{
 
          res.push(value);
     }
 
    });
 
 
 
    return res;
 
 
 }


 Array.prototype.flatten2 = function() {

    let res = [];

    this.forEach(value=>{

        if(Array.isArray(value)){
            res = res.concat(value.flatten2());
        }else{
            res.push(value);
        }
    })
    return res;
 }

 console.log(array.flatten2());