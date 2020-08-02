const throttle = (fn,limit)=>{
    console.log('Throttle Function called...')
     let flag = true;       
     clearTimeout();
    return function(){
        if(flag){
        fn();
        flag= false;
        setTimeout(()=>{

            flag =true;

        },limit)
        }
      
    }
}

function expensiveFunction(){
    console.count("Throttled Function");
}

const betterExpensiveFn = throttle(expensiveFunction,3000)
window.addEventListener('resize',betterExpensiveFn)

const normalFunc = () => {
    console.count("Normal Function");
  }
  
  window.addEventListener("resize",normalFunc);
  