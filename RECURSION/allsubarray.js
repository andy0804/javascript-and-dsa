function allSubsets(numsarray) {

    const subsets = new Array(numsarray.length);
    helper(numsarray,subsets,0) 

   
   }
   
   function helper(numsarray,subsets,index) {
   
      if(index == numsarray.length){
          console.log(subsets)
      }


      else{
      subsets[index] = null;
      helper(numsarray,subsets,index+1   ) // choose the element
      subsets[index] = numsarray[index]
      helper(numsarray,subsets,index+1   )// don't choose the element

      }
   
   
   
   }


allSubsets([1,2,3]);