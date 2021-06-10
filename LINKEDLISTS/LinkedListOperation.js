// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head); // points new node to prev node
    this.head = newNode; // assigs head to new node

    // if(this.head){
    //      // assigning the value of this.head
    //      const currentNode = this.head;
    //      newNode.next = currentNode;
    //      this.head = newNode;
    // }else{
    //     this.head = newNode;
    // }
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    // point head to this.head.next
    this.head = this.head.next;
  }

  removeLast() {
    // when list is empty
    if (this.head == null) return this;

    // when list has one element
    if (this.head.next == null) {
      this.head = null;
      return this;
    }

    let currentNode = this.head;
    let secondlastNode;
    while (currentNode.next) {
      secondlastNode = currentNode;
      currentNode = currentNode.next;
    }
    secondlastNode.next = null;

    // let previous = this.head;
    // let current = this.head.next;

    // while(current.next){
    //               previous =  current;
    //               current = currentNode.next;
    // }
    // previous.next = null;
  }

  insertLast(data) {
    // when the LL is empty

    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let lastNode = this.getLast();
      let newNode = new Node(data);
      lastNode.next = newNode;
      //     // traverse to the end of the LL
      //     let currentNode = this.head;
      //     while (currentNode.next) {
      //         currentNode = currentNode.next;
      //     }

      //    // create a new node that points to null
      //    const newNode = new Node (data);
      //    // assign last node to new node
      //    currentNode.next = newNode;
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter == index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }

  removeAt(index) {
    //if the list is empty
    if (this.head == null) {
      return this;
    }
    // get the element at the previous node
    const previousNode = this.getAt(index - 1);
    const currentNode = index == 0 ? this.head : previousNode.next;

    if (currentNode == null) {
      return this;
    }

    //deleting the first node
    if (index == 0) {
      this.head = currentNode.next;
      currentNode.next = null;
      return this;
    }

    //if previous node is null then there is only one elment
    if (previousNode == null) {
      this.head = null;
      return this;
    } else {
      previousNode.next = currentNode.next;
      currentNode.next = null;
    }

    // // linked list is empty
    // if(this.head == null)
    // return this;

    // let counter = 0
    // let currentNode = this.head;
    // let previousNode;

    // // removing the first element i.e head
    // if(index ==0){
    //  this.head = currentNode.next;
    //  currentNode.next = null;
    //  return this;
    // }

    // // remove any other element;
    // while (currentNode) {
    //     counter++;
    //     previousNode = currentNode;
    //     currentNode = currentNode.next;
    //     // we have found the node
    //     if( currentNode!==null && counter == index ){
    //         previousNode.next = currentNode.next;
    //         currentNode.next = null;
    //         return this;
    //     }
    // }

    // return this;
  }

  insertAt(value, index) {
    //list is empty
    if (index == 0) {
      this.insertFirst(value);
      return;
    }
    if (index == this.size()) {
      this.insertLast(value);
      return;
    }

    if (index > this.size()) {
      this.insertLast(value);
      return;
    }
    const previousNode = this.getAt(index - 1);
    // array indext out of bounds
    if (!previousNode || !previousNode.next) {
      return;
    }
    // new node points to current node;
    const newNode = new Node(value, previousNode.next);
    // previous node points to new node;
    previousNode.next = newNode;
  }

  forEach(callback) {
    /**
     * function (node,index)
     */
    let pointer = this.head;
    let counter = 0;
    while (pointer) {
      callback(pointer, counter);
      pointer = pointer.next;
      counter++;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(1);
linkedList.insertLast(2);
linkedList.insertLast(3);

// linkedList.forEach((node, index) => {
//   node.data += 10;
// });

console.log(linkedList);

module.exports = { Node, LinkedList };
