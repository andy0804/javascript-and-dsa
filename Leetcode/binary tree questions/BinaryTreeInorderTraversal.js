/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let inorderTraversalPath = [];

  inorder(root, inorderTraversalPath);
  return inorderTraversalPath;
};

function inorder(root, inorderTraversalPath) {
  console.log("path in diff stages", inorderTraversalPath);
  if (!root) return;
  inorder(root.left, inorderTraversalPath);
  inorderTraversalPath.push(root.val);
  inorder(root.right, inorderTraversalPath);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode();

tree.right = new TreeNode();
tree.val = 1;
tree.right.left = new TreeNode();
tree.right.val = 2;
tree.right.left.val = 3;

let path = inorderTraversal(tree);
console.log("path", path);
