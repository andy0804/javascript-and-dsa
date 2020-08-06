class MyEventEmitter {

 constructor() {
     this.event = {};
 }

 on(name,listener){

    if(!this.event[name]){
        this.event[name] = [listener]
    } else{
        this.event[name].push(listener)
    }
 }

 emit(name,text){

    if(!this.event[name]){
  console.log('error')
    }

    else {

        this.event[name].forEach(i=>{
            i.call(this,text);
        })
    }
 }

}

let eventEmittr = new MyEventEmitter();

let handler = function(data){
    console.log(data);
}

eventEmittr.on('test',handler);

eventEmittr.emit('test','data');
eventEmittr.emit('test','data1');
