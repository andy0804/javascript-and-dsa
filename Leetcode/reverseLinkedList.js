/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // initialize our pointers

  let currentNode = head;
  let previousNode = null;
  let nextNode = null;

  while (currentNode != null) {
    // stash the node the current node is pointing to
    nextNode = currentNode.next;
    // now let the currentNode's next location should point to the previous node
    currentNode.next = previousNode;
    // now let our current node be the previousNode
    previousNode = currentNode;
    // Now our current node point to the next Node
    currentNode = nextNode;
  }
  return previousNode;
};
