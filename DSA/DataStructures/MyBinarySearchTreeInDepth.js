class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//Depth first search

const DFS = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

//Depth first search recursive

const DFSRecursive = (root) => {
  if (root === null) return [];
  const leftSubTree = DFSRecursive(root.left);
  const rightSubTree = DFSRecursive(root.right);
  const result = [root.value, ...leftSubTree, ...rightSubTree];

  return result;
};

//Breadth first search

const BFS = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
};

// isPresent (BFS)

const isPresent = (root, value) => {
  if (root === null) return false;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.value === value) {
      return true;
    }

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return false;
};

//isPresent (Recursive)
const isPresentRecursive = (root, value) => {
  if (root === null) return false;
  if (root.value === value) return true;
  return (
    isPresentRecursive(root.left, value) ||
    isPresentRecursive(root.right, value)
  );
};

//treeSum

const treeSum = (root) => {
  let sum = 0;
  if (root === null) return sum;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.value;
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return sum;
};

//treeSum (Recursive)
const treeSumRecursive = (root) => {
  let sum = 0;
  if (root === null) return sum;
  const sumLeft = treeSumRecursive(root.left);
  const sumRight = treeSumRecursive(root.right);
  sum = root.value + sumLeft + sumRight;
  return sum;
};

// treeMinValue (DFS)
const treeMinDFS = (root) => {
  if (root === null) return Infinity;
  let smallest = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value < smallest) {
      smallest = current.value;
    }

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return smallest;
};

//treeMinValue (BFS)

const treeMinBFS = (root) => {
  if (root === null) return Infinity;
  let smallest = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value < smallest) {
      smallest = current.value;
    }

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return smallest;
};

//treeMinValue (Recursive)

const treeMinRecursive = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMinRecursive(root.left);
  const rightMin = treeMinRecursive(root.right);
  return Math.min(root.val, leftMin, rightMin);
};

// Max Root to Leaf Path Sum (Recursive)

const maxPathRecursive = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right) return root.value;
  const leftMax = maxPathRecursive(root.left);
  const rightMax = maxPathRecursive(root.right);
  const maxChildSum = Math.math(leftMax, rightMax);
  return root.val + maxChildSum;
};

const a = new Node(3);
const b = new Node(4);
const c = new Node(5);
const d = new Node(6);
const e = new Node(7);
const f = new Node(8);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// a
// /\
// b c
// /\ \
// d e  f

// DFS(a);
// DFSRecursive(a);
// BFS(a);
// BFSRecursive(a);
console.log(treeMinBFS(f));

