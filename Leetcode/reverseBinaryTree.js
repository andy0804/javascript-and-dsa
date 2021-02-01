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
  if (!root) return root;

  if (root && !root.left && !root.right) return root;

  if (!root.right && !root.left) return;
  [root.left, root.right] = [root.right, root.left];
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
