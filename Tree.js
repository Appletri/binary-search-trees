import buildTree from './buildTree.js';
import Node from './Node.js';
import levelOrder from './levelOrder.js';

function Tree(arr) {
  return {
    root: buildTree(arr, 0, arr.length - 1),
    
    insert(value) {
      console.log(`inserting ${value}`);
      this.root = insertion(this.root, value);
    },

    delete(value) {
      console.log(`deleting ${value}`);
      this.root = deletion(this.root, value);
    },

    find(value) {
      console.log(`finding ${value}`);
      this.root = finding(this.root, value);
    },

    printLevelOrder(root) {
      const results = levelOrder(root);
      console.log(results);
    },
    
    inorder(root) {
      console.log('inorder results');
      traverseInOrder(this.root);
    },

    preorder(root) {
      console.log('preorder results');
      traversePreOrder(this.root);
    },

    postorder(root) {
      console.log('postorder results');
      traversePostOrder(this.root);
    },

    height(root) {
      const results = findHeight(this.root);
      console.log(`height of tree is ${results}`);
    },

    depth(value) {
      const results = findDepth(this.root, value);
      console.log(`depth of ${value} is ${results}`);
    },

    isBalanced(root) {
      if (root === null) return false;

      let left = root.left;
      let right = root.right;
  
      if (Math.abs(findHeight(left) - findHeight(right)) > 1) {
        console.log(false);
      } else {
        console.log(true);
      }
    },
 
    rebalance() {
      const sorted = treeToArray(this.root);
      console.log(sorted);
      this.root = buildTree(sorted, 0, sorted.length - 1);
    }
  }
}

function finding(root, data){
  if (root === null || root.data === data) {
    console.log(root);
    return root;
  }

  if (root.data < data)
    return finding(root.right, data);

  return finding(root.left, data);
}

function insertion(root, data){
  if (root === null || root.data === data) {
    root = Node(data);
    return root;
  }
  
  if (data < root.data) {
    root.left = insertion(root.left, data);
  }
  else if (data > root.data) {
    root.right = insertion(root.right, data);
  }

  return root;
              
}

function deletion(root, data){
  if (root === null) {
    return root;
  }

  if (data < root.data) {
    root.left = deletion(root.left, data);
  }
  else if (data > root.data) {
    root.right = deletion(root.right, data);
  }
  else {
    //single childs
    if (root.left === null){
      return root.right;
    } else if (root.right === null){
      return root.left;
    }
    //double childs
    root.data = minValue(root.right);

    root.right = deletion(root.right, root.data);
  }

  return root;

}

function minValue(root) {
  let min = root.data;

    while (root.left !== null) {
      minv = root.left.data;
      root = root.left;
    }

  return min;
}

function traverseInOrder(root) {
  if (root !== null) {
    traverseInOrder(root.left);
    console.log(root.data);
    traverseInOrder(root.right);
  }
}

function traversePreOrder(root) {
  if (root !== null) {
    console.log(root.data);
    traversePreOrder(root.left);
    traversePreOrder(root.right);
  }
}

function traversePostOrder(root) {
  if (root !== null) {
    traversePostOrder(root.left);
    traversePostOrder(root.right);
    console.log(root.data);
  }
}

function findHeight(root) {
  if (root === null) {
    return -1;
  } else {
    let left = findHeight(root.left);
    let right = findHeight(root.right);

    return Math.max(left, right) + 1;
  }
}

function findDepth(root, data) {
  let depth = -1;
  
  function traverse(root, data) {
    depth += 1;

    if (root === null || root.data === data) {
      return;
    }
  
    if (root.data < data)
      return traverse(root.right, data);
  
    return traverse(root.left, data);
  }

  traverse(root, data);
  return depth;
}

function treeToArray(root) {
  let newArr = []
  
  
  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      newArr.push(root.data);
      traverse(root.right);
    }
  }
  
  
  traverse(root);
  return newArr;
}

export default Tree