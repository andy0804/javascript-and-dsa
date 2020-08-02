let array = [ 3, 4 , 1 , 2 , 10 , 6 ]

array.sort((a,b)=>{
    return a > b ? 1 : -1;
})

console.log(array)

console.log(  binarySearch(3,array));
/**
 * 
 * element to search 6
 * set low = 0
 * set high = 5
 * set mid =  2
 * 
 * if arr[mid] is our number then return it
 * 
 * if element < arr[mid] , we have to reduce our search from
 * low ==> mid -1
 * 
 * if element > arr[mid] , we have to reduce our from
 * mid + 1 ==> high
 * 
 *  1 ,2 ,3 ,4 ,6 , 10
 *  low             high
 *  0  1  2  3  4   55
 *        mid
 * 
 * 6 > arr[mid]
 * 
 *  4   6       10
 *  low  mid    high
 * 
 * arr[mid] == element
 * 
 * Now what if our elment was 11
 * 
 * 11 > 6
 * 
 * mid = high
 * 
 * so if low is equal to hgih and arr[low] ! = element return ;
 * 
 * 


 */


function binarySearch (element , arr) {


    let low =  0 
    let high = arr.length - 1;
    let mid = Math.floor((low + high)/2);
    let result ;
    if(arr[mid] == element)
    return `Found at ${mid}`;

     while (low <= high) {

        if(arr[mid] == element)
        result = `Found at ${mid}`;

        if(element < arr[mid]) {
            high = mid -1
            mid = Math.floor((low + high)/2);
        } else {
         
            low = mid + 1;
            mid = Math.floor((low + high)/2);
        }

    }

    return result ? result :'Not found';

}


