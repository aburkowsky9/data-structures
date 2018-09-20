var LinkedList = function() {
  var list = {};
  list.head = list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = list.tail = new Node(value); 
    } else {
      const newNode = new Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    const removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
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

var linkedList = LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.removeHead();
/*
   * Complexity: What is the time complexity of the above functions?
   */
