function debounce(fn,limit){

    let timer;
    console.log('Debouncing Function')

    return function() {
    clearTimeout(timer);
    let context = this;
    let args = arguments;
    timer = setTimeout(()=>{

        processData.apply(context,arguments)
    },limit)

    }
}

function processData(event){

    console.log(event.target.value);

}

let search = document.querySelector('#search');
const debouncedFunction = debounce(processData,300);
search.addEventListener('keyup',debouncedFunction)