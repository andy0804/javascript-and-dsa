/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  let circular = false;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow.next === fast.next) {
      circular = true;
      break;
    }
  }
  return circular;
};
