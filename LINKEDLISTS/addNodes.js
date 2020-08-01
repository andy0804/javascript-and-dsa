function addNodes(nodeOne , nodeTwo){

    const numOne = getSum(nodeOne)
    const numTwo = getSum(nodeTwo);


   let sum = +numOne + +numTwo;
   console.log(sum);
   sum = sum + '';
   sum = sum.split('').reverse();   
   return arrayToList(sum);

}
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            val: array[i],
            next: list//null, then {value:20, rest: null}
        };
    }

    return list;
}

function generateList(sum){
   let root = null;
   for(i = 0 ; i < sum.length ;i++){
       root  = insert( root , sum[i]);
   }

   return root;
  
}

function insert(root ,item){

    let temp =  {val : item , next : null};
    let current;
    if(root == null){
        root = node;
        return root;

    }

    else {
        current = root;

        while(current.next!=null){
            current = current.next;
        }
        current.next = temp;

        return root;
    }
}

function getSum(node){
 
    let number = '';
    let currentNode = node;
    while(currentNode){

        number = number + String(currentNode.val);
        currentNode = currentNode.next;

    }
    number =number.split('').reverse().join('');

    return number;
}

class Node{

    constructor(data){
        this.val = data;
        this.next = null;
    }
}


const node = new Node(1);
node.next = new Node(0);
node.next.next = new Node(1);



const nodeTwo = new Node(1);
nodeTwo.next = new Node(0);
nodeTwo.next.next = new Node(1);


console.log(addNodes(node,nodeTwo));