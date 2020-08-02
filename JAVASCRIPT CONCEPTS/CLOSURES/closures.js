/**
 * 
 * Whenver you have fucntion say an outer function
 * and within it you have an inner fucntion executing inside the outer.
 * The inner function has access to all of the scope of the outer function.
 * So even after the outer function has been executed , the inner funtion
 * has access to the outer funtion scope and variables.
 */

function outerFunction(outervariable){

    return function(innerVariable){
        console.log('inner variable' + innerVariable);
        console.log('outer variable' + outervariable);
    }
}

const executor = outerFunction('outer');
executor('inner');

