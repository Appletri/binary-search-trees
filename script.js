import prettyPrint from "./prettyPrint.js";
import buildUnsortedArr from './buildUnsortedArr.js';
import sortArr from './sortArr.js';
import Tree from "./Tree.js";

// const unsortedArr = buildUnsortedArr(6)
// const sortedArr = sortArr(unsortedArr);

const sortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// const newTree = Tree(sortedArr);

// prettyPrint(newTree.root);



// newTree.insert(30);
// prettyPrint(newTree.root);
// newTree.delete(6);
// prettyPrint(newTree.root);
// newTree.find(8);



// newTree.printLevelOrder(newTree.root);
// newTree.inorder(newTree.root);
// newTree.preorder(newTree.root);
// newTree.postorder(newTree.root);

// newTree.insert(9);
// newTree.insert(10);
// newTree.insert(11);
// prettyPrint(newTree.root);
// newTree.height(newTree.root);
// const searchNode = newTree.find(10);
// newTree.depth(searchNode);

// newTree.isBalanced(newTree.root);



// newTree.insert(9);
// newTree.insert(10);
// prettyPrint(newTree.root);
// newTree.isBalanced(newTree.root);
// newTree.rebalance();
// prettyPrint(newTree.root);
// newTree.isBalanced(newTree.root);

function driver() {
  // const unsortedArr = buildUnsortedArr(10)
  // const sortedArr = sortArr(unsortedArr);
  const newTree = Tree(sortedArr);
  newTree.isBalanced(newTree.root);
  prettyPrint(newTree.root);
  newTree.printLevelOrder(newTree.root);
  newTree.inorder(newTree.root);
  newTree.preorder(newTree.root);
  newTree.postorder(newTree.root);
  newTree.insert(101);
  newTree.insert(102);
  newTree.insert(103);
  newTree.insert(104);
  newTree.isBalanced(newTree.root);
  newTree.rebalance();
  newTree.isBalanced(newTree.root);
  newTree.printLevelOrder(newTree.root);
  newTree.inorder(newTree.root);
  newTree.preorder(newTree.root);
  newTree.postorder(newTree.root);
  prettyPrint(newTree.root);
  newTree.height();
  newTree.depth(102);
}
driver();

