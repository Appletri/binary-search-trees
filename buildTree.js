import Node from './Node.js';

function buildTree(arr, start, end) {

  if (start > end)
  {
    return null
  }
  
  const mid = parseInt((start + end) / 2);
  const node = Node(arr[mid]);

  node.left = buildTree(arr, start, mid - 1);
  node.right = buildTree(arr, mid + 1, end);
  return node;
}

export default buildTree;