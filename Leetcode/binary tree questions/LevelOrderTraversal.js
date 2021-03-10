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
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let levels = [];

  while (queue.length !== 0) {
    const queueLength = queue.length;
    const currentLevel = [];

    for (i = 0; i < queueLength; i++) {
      const element = queue.shift();

      if (element.left) {
        queue.push(element.left);
      }

      if (element.right) {
        queue.push(element.right);
      }

      currentLevel.push(element.val);
    }
    levels.push(currentLevel);
  }
  return levels;
};
