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
  const lcaOptimized = (root, n1, n2) => {
    if (root == null) return null;
    if (root.val === n1 || root.val === n2) return root;
    const leftNode = lcaOptimized(root.left, n1, n2);
    const rightNode = lcaOptimized(root.right, n1, n2);
    if (leftNode && rightNode) return root;
    return leftNode ? leftNode : rightNode;
  };
  const result = lcaOptimized(root, p.val, q.val);
  return result;
};
