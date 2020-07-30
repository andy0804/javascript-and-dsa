var button = document.querySelector('.traverse');
button.addEventListener('click',function(){
let rootA = document.getElementById('rootA');
let rootB = document.getElementById('rootB');

let nodeA = document.getElementById('nodeA');
let nodeB = document.getElementById('nodeB');

function getPath(root, node) {
  const path = [];
  
  while (node !== root) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    const nodeIndex = children.indexOf(node);
    path.push(nodeIndex);
    node = parent;
  }
  
  return path;
}

function getNodeFromPath(node, path) {
  const toWalk = [...path];
  
  while (toWalk.length > 0) {
    node = node.children[toWalk.pop()];
  }
  
  return node;
}

function getSymmetricNode(rootA, rootB, nodeA) {
  const pathToNode = getPath(rootA, nodeA);
  return getNodeFromPath(rootB, pathToNode);
}


const targetNode = getSymmetricNode(rootA, rootB, nodeA);

console.log(nodeB === targetNode);

if(nodeB = targetNode)
{
    nodeB.style.backgroundColor = 'yellow';
}



})
