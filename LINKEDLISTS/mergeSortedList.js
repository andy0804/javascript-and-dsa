/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (A, B) {
  if (A == null) return B;
  if (B == null) return A;

  if (A.val < B.val) {
    A.next = mergeTwoLists(A.next, B);
    return A;
  } else {
    B.next = mergeTwoLists(A, B.next);
    return B;
  }
};
