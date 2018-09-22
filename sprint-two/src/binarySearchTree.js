var BinarySearchTree = function(value) {
  this.value = value;
  this.left = this.right = null;
};

BinarySearchTree.prototype.insert = function(val) { // O(log n)
  if (this.value < val) {
    if (!this.right) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (this.value > val) {
    if (!this.left) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) { // O(log n)
  if (target === this.value) {
    return true;
  }
  if (this.value < target) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(target);
    }
  } else {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(target);
    }
  }  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) { // O(n)
  this.helper(this, cb);
};

BinarySearchTree.prototype.helper = function(node, cb) { 
  if (!node) { return; }
  if (node !== null) {
    cb(node.value);
  }
  this.helper(node.left, cb);
  this.helper(node.right, cb);
};

