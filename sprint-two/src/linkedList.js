var LinkedList = function() {
  var list = {};
  list.head = list.tail = null;

  list.addToTail = function(value) { // O(1)
    if (!list.head) {
      list.head = list.tail = new Node(value); 
    } else {
      const newNode = new Node(value);
      list.tail.next = newNode;
      list.tail = this.tail.next;
    }
  };

  list.removeHead = function() { // O(1)
    const removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) { // O(n)
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      } 
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};