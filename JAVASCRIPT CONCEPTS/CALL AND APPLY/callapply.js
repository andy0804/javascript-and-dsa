var obj = {num:2};

var addTo = function(a){

    return this.num + a;
}

/**
 The call() method calls a function with a given 
 this value and arguments provided individually.
 */

 /*
The difference between call() and apply() 
is that call() passes all arguments after
the first one on to the invoked function, while apply() 
takes an array as its second argument and passes the members
of that array as arguments.
 */
console.log(addTo.call(obj,3));

console.log(addTo.apply(obj,[1]));