

    /**
     * Types of inputs possible
     * 
     * X can be 0 , return 0
     * X can be 1 , return 1
     * if anything other than 0 or 1, we solve for x and n..
     *
     *Lets take a small number 2 and the power is 3 => so resut should be 8
     * My first thought here is we need to have a recursivve solution
     * And we we do some logic and pass the answer back to the function and then we decremebt the value of n
     * 
     *  2 , 3
     * 
     *  Do something as long as power is not zer0
     *   result = result * x
     *   reduce power
     *   2 = 1 * 2
     *   resut = 2
     *   power = 2
     *      = 2 *2
     *   power = 1
     *     = 4 * 2
     * 
         power = 8
     *     
     *  resut = 1
     *  while(n>0){
     *    result = result * n;
     *    n = n -1;
     * }
     * return result
     * 
     * 
     */

   function  power(x,n){

    if (n == 0)
    return 1

    if (n == 1)
    return x

   if (n == -1)
    return 1 / x

 let result = power(x, n/2)

  return n%2 ==0 ? result * result : result * result * x;
   }

   console.log(power(2,8));

