var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  Object.assign(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  const child = Tree(value);
  this.children.push(child);
};

// treeMethods.contains = function(target) {
//   var result = false;
//   console.log('I am this', this);
//   if (this.value === target) {
//     result = true;
//   }
 
//   for (let i = 0; i < this.children.length; i += 1) {
//     var child = this.children[i];
//     if (child.value === target) {
//       result = true;
//     } else if (child.children.length) {
//       return child.contains(target);
//     }
//   }
//   return result;
// };

treeMethods.contains = function(target) {
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


// var tree = Tree();
// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8); 
// tree.contains(7)//).to.equal(true);
// tree.contains(8)//).to.equal(true)




// tree.contains(7)//).to.equal(true);
// tree.contains(8)//).to.equal(true)

/*
 * Complexity: What is the time complexity of the above functions?
 */
