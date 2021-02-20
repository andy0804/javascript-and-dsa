/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return;
  if (root.val === n1.val || root.val === n2.val) return root;
  const leftNode = lowestCommonAncestor(root.left, n1, n2);
  const rightNode = lowestCommonAncestor(root.right, n1, n2);
  if (leftNode && rightNode) return root;
  return leftNode ? leftNode : rightNode;
};
