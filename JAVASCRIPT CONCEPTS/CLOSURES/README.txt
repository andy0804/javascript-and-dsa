Whenver you have function say an outer function and within it you have an inner fucntion executing inside the outer.The inner function has access to all of the scope of the outer function.
So even after the outer function has been executed , the inner funtion
has access to the outer funtion scope and variables.

Defining a closure

To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.

Why use it  ?

Privacy:

a = (function () {
    var privatefunction = function () {
        alert('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
})();
As you can see there, a is now an object, with a method publicfunction ( a.publicfunction() ) which calls privatefunction, which only exists inside the closure. You can NOT call privatefunction directly (i.e. a.privatefunction() ), just publicfunction().

Its a minimal example but maybe you can see uses to it? We used this to enforce public/private methods





<button onclick="updateClickCount()">click me</button>  
Now there could be many approaches like:
1) You could use a global variable, and a function to increase the counter:

var counter = 0;

function updateClickCount() {
    ++counter;
    // do something with counter
}
But, the pitfall is that any script on the page can change the counter, without calling updateClickCount().

2) Now, You might be thinking of declaring the variable inside the function:

function updateClickCount() {
    var counter = 0;
    ++counter;
    // do something with counter
}
But, Hey! Every time updateClickCount() function is called, the counter is set to 1 again.

3) Thinking about Nested functions?

Nested functions have access to the scope "above" them.
In this example, the inner function updateClickCount() has access to the counter variable in the parent function countWrapper()

function countWrapper() {
    var counter = 0;
    function updateClickCount() {
    ++counter;
    // do something with counter
    }
    updateClickCount();    
    return counter; 
}
This could have solved the counter dilemma, if you could reach the updateClickCount() function from the outside and you also need to find a way to execute counter = 0 only once not everytime.

4) Closure to the rescue! (self-invoking function):

 var updateClickCount=(function(){
    var counter=0;

    return function(){
     ++counter;
     // do something with counter
    }
})();
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way updateClickCount becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function!



27

I know i am super late in answering this question but it might help anyone still searching for the answer in 2018.

Javascript closures can be used to implement throttle and debounce functionality in your application.

Throttling:

Throttling puts a limit on as a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."

Code :

const throttle = (func, limit) => {
  let isThrottling
  return function() {
    const args = arguments
    const context = this
    if (!isThrottling) {
      func.apply(context, args)
      isThrottling = true
      setTimeout(() => isThrottling = false, limit)
    }
  }
}
Debouncing:

Debouncing put a limit on a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called."

Code:

const debounce = (func, delay) => {
  let debouncing
  return function() {
    const context = this
    const args = arguments
    clearTimeout(debouncing)
    debouncing = setTimeout(() => func.apply(context, args), delay)
  }
}
As you can see closures helped in implementing two beautiful features which every web app should have to provide smooth UI experience functionality.

I hope it will help someone.