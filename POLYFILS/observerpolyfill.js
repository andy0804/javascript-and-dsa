/**
 * Source :https://www.stackchief.com/tutorials/JavaScript%20Observables%20in%205%20Minutes
 */



class Observable {

    constructor(data){
        this.data = data;
    }

    subscribe(observer){
        this.data(observer);
    }
}

let myObservable = new Observable(obj=>{

    setTimeout(()=>{

        obj.next('Receiving data');
        obj.complete();
    },2000)
})

let myObserver = {
    next : function(data){
        console.log(data);
    },
    complete: function() {
    console.log('Completed..')
    },
    error: function(){
        console.log('error');
    }
}

myObservable.subscribe(myObserver);



