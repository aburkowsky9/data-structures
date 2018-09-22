var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  Object.assign(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  const child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) { // O(n);
  let wasFound = false; 
  const hasChild = function(node) {
    if (node.value === target) {
      wasFound = true;
    }
    for (let i = 0; i < node.children.length; i += 1) {
      hasChild(node.children[i]);
    }
  };
  hasChild(this);
  return wasFound;
};
