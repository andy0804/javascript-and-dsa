class LinkedList {

    constructor(){
        this.head = null;

    }

    getNthToLast(input){

        let current = this.head
        let follower = this.head;
      
        while ( input > 0) {
                  current = current.next;
                  input--;
        }

        while (current.next){
            current = current.next
            follower = follower.next;
        }
 
        return follower.data;

    }
}

class Node {

    constructor(data){
        this.data = data;
        this.next  = null;
    }
}

const linkedList = new LinkedList();
const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeFive = new Node(5);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;

linkedList.head = nodeOne
console.log(linkedList.getNthToLast(1))
console.log(linkedList.getNthToLast(2))
console.log(linkedList.getNthToLast(3))
console.log(linkedList.getNthToLast(4))




