function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // edge case for root has not defined
  if (!root) return root;
  // edge case when root is defined but no children
  if (root && !root.left & !root.right) return root;
  // leaf node terminating condition
  if (!root.left && !root.right) return;
  [root.right, root.left] = [root.left, root.right];
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const tree = new TreeNode();

tree.left = new TreeNode();
tree.right = new TreeNode();
tree.val = 4;
tree.left.val = 2;
tree.right.val = 7;
tree.left.left = new TreeNode();
tree.left.left.val = 1;
tree.left.right = new TreeNode();
tree.left.right.val = 3;
tree.right.left = new TreeNode();
tree.right.left.val = 6;
tree.right.right = new TreeNode();
tree.right.right.val = 9;
const ans = invertTree(tree);
console.log("inv", ans);
