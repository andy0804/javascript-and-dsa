class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(element) {
    // inserting first at the last position
    this.heap[this.size] = element;
    // now increment the size;
    this.size++;
    // now we need to ensure that data is stored correctly so heapify
    this.heapify();
  }
  insertRecursive(element) {
    // inserting first at the last position
    this.heap[this.size] = element;
    // now increment the size;
    this.size++;
    // now we need to ensure that data is stored correctly so heapify
    this.heapifyRecursive(this.size - 1);
  }

  removeMin() {
    if (this.size === 0) {
      throw new Error("Empty Heap");
    }

    // get the min element from

    let data = this.heap[0];

    // now we want to copy the last element to the first
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.heapifyDown();
    return data;
  }
  removeMinRecursive() {
    if (this.size === 0) {
      throw new Error("Empty Heap");
    }

    // get the min element from

    let data = this.heap[0];

    // now we want to copy the last element to the first
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.heapifyDownRecursive(0);
    return data;
  }
  heapifyDown() {
    let index = 0;
    // start from heap and go down till we have a left child

    // reason we check only left child , is that a heap must be a complete tree ,
    // It must  be filled from left to right
    while (this.hasLeftChild(index)) {
      // now we want to check the smallest among the two children

      let smallestChildIndex = this.getLeftChildIndex(index);

      // we check if there is a right child and if right child index is smaller than left child index
      // we make the right child the new smallest

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallestChildIndex = this.getRightChildIndex(index);
      }
      // check if current node is smaller than our smallest children then we dont do anything

      if (this.heap[index] < this.heap[smallestChildIndex]) {
        break;
      } else {
        // if we have come this far , it means we have to swap current index and smallest index
        this.swap(index, smallestChildIndex);
        index = smallestChildIndex;
      }
    }
  }

  heapifyDownRecursive(index) {
    let smallestChildIndex = index;
    if (
      this.hasLeftChild(index) &&
      this.heap[smallestChildIndex] > this.leftChild(index)
    )
      smallestChildIndex = this.getLeftChildIndex(index);

    if (
      this.hasRightChild(index) &&
      this.heap[smallestChildIndex] > this.rightChild(index)
    )
      smallestChildIndex = this.getRightChildIndex(index);

    if (smallestChildIndex != index) {
      this.swap(index, smallestChildIndex);
      this.heapifyDownRecursive(smallestChildIndex);
    }
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  heapify() {
    // start with the element that was just inserted
    let index = this.size - 1;

    // we want to walk up from the bottom of the tree till we have a parent node and the parent node is greater than the current node

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      // new parent
      index = this.getParentIndex(index);
    }
  }

  heapifyRecursive(index) {
    if (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyRecursive(this.getParentIndex(index));
    }
  }

  getMin() {
    if (this.elements !== 0) return this.heap[0];
    return null;
  }
}

let heap = new MinHeap();

heap.insert(11);
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(9);
heap.insert(8);
heap.insert(-1);

console.log("heap", heap.getMin());
