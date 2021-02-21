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

var preOrderTraversal = function (root) {
  let preOrderTraversalPath = [];

  preOrder(root, preOrderTraversalPath);
  return preOrderTraversalPath;
};
var postOrderTraversal = function (root) {
  let postOrderTraversalPath = [];

  postOrder(root, postOrderTraversalPath);
  return postOrderTraversalPath;
};
var dfsTraversal = function (root) {
  let dfsTraversalPath = [];

  let queue = [root];
  dfs(dfsTraversalPath, queue);
  return dfsTraversalPath;
};
function dfs(dfsTraversalPath, queue) {
  if (queue.length === 0) return dfsTraversalPath;

  if (queue.length > 0) {
    const node = queue.shift();

    // adding items of the beginning for dfs
    if (node.right) {
      queue.unshift(node.right);
    }
    if (node.left) {
      queue.unshift(node.left);
    }

    dfsTraversalPath.push(node.val);
  }
  dfs(dfsTraversalPath, queue);
}

var bfsTraversal = function (root) {
  let bfsTraversalPath = [];

  let queue = [root];
  bfs(bfsTraversalPath, queue);
  return bfsTraversalPath;
};
function bfs(bfsTraversalPath, queue) {
  if (queue.length === 0) return bfsTraversalPath;

  if (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      //adding to the end for  bfs
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    bfsTraversalPath.push(node.val);
  }
  bfs(bfsTraversalPath, queue);
}

function inorder(root, inorderTraversalPath) {
  if (!root) return;
  inorder(root.left, inorderTraversalPath);
  inorderTraversalPath.push(root.val);
  inorder(root.right, inorderTraversalPath);
}

function preOrder(root, preOrderTraversalPath) {
  if (!root) return;
  preOrderTraversalPath.push(root.val);
  preOrder(root.left, preOrderTraversalPath);
  preOrder(root.right, preOrderTraversalPath);
}
function postOrder(root, postOrderTraversalPath) {
  if (!root) return;
  postOrder(root.left, postOrderTraversalPath);
  postOrder(root.right, postOrderTraversalPath);
  postOrderTraversalPath.push(root.val);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode();
tree.val = 1;
tree.right = new TreeNode();
tree.left = new TreeNode();

tree.right.val = 3;
tree.left.val = 2;
tree.left.left = new TreeNode();
tree.left.left.val = 4;
tree.left.right = new TreeNode();
tree.left.right.val = 5;
/**
 *         1
 *     2       3
 *   4  5
 * DFS : 1 2 4 5 3
 * BFS : 1 2 3 4 5
 */
let inOrderpath = inorderTraversal(tree); // left - root - right
let preOrderPath = preOrderTraversal(tree); // root - left - right
let postOrderPath = postOrderTraversal(tree); // left - right - root
let bfsPath = bfsTraversal(tree);
let dfsPath = dfsTraversal(tree);
console.log(" inOrderpath path", inOrderpath);
console.log(" preOrderPath path", preOrderPath);
console.log(" postOrderPath path", postOrderPath);
console.log(" bfs path", bfsPath);
console.log(" dfs path", dfsPath);
