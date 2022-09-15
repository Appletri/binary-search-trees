function levelOrder(root) {
  if(root === null) return [];
  let results = [];
  let queue = [root];

  while (queue.length !== 0) {
    let subqueue = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      subqueue.push(node.data);
      if (node.left) {
        queue.unshift(node.left);
      };
      if (node.right) {
        queue.unshift(node.right);
      };
    };
    results.push(subqueue);
  }
  return results;
}

export default levelOrder;