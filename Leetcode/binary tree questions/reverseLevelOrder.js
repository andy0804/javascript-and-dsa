var levelOrderRversal = function (root) {
  if (!root) return [];
  let queue = [root];
  let stack = [];

  while (queue.length !== 0) {
    const queueLength = queue.length;

    for (i = 0; i < queueLength; i++) {
      const element = queue.shift();

      if (element.right) {
        queue.push(element.right);
      }

      if (element.left) {
        queue.push(element.left);
      }

      stack.unshift(element.val);
    }
  }
  return stack;
};

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

const path = levelOrderRversal(tree);
console.log(path);
/**
 *         1
 *     2       3
 *   4  5
 * DFS : 1 2 4 5 3
 * BFS : 1 2 3 4 5
 */

/**
 *
 * Reverse Level Order Traversal
 * 1. Start with the Root
 * 2. Put the Root into the queue
 * 3  Check if queue has children
 * 4. If yes then remove the element from the queue and store in current
 * 5. If current has right child , push in queue
 * 6. If current has left child , push in queue
 * 7. push current in stack
 * 8. Continue till no elements are there...
 */
