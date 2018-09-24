var Dbnode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  
  return node;
};

var DbLinkedList = function() {
  var list = {};
  list.length = 0;
  list.tail = list.head = null;

  list.addToTail = function(value) { // O(1)
   var newNode = new Dbnode(value);
   if (!this.tail) {
      this.tail = this.head = newNode;
      this.length = 1;
    } else {
      var newTail = newNode;
      newTail.previous = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
      this.length++;
    }
    
  };
  
  list.addToHead = function(value) {
    var newNode = new Dbnode(value);
    
    if(!this.head) {
      this.head = this.tail = newNode;
      this.length = 1;
    } else {
      var newHead = newNode;
      newHead.next = this.head;
      this.head.previous = newHead;
      this.head = newHead;
      this.length++;
    }
  };
  
  list.removeTail = function() {
    const val = this.tail.value;
    if (!this.tail) {
      return null;
    } else if (this.length === 1) {
        this.tail = this.head = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    return val;
  };

  list.removeHead = function() { // O(1)
    const val = this.head.value;
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
        this.tail = this.head = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    return val;
   };

  list.contains = function(target) { // O(n)
    if (this.head.value === target) {
      return true;
    }
    
    var node = this.head;
    for (var i = 0; i < this.length; i++) {
      if (node === null) return false;

      if (node.value === target) {
        return true;
      }
      else {
        node = node.next;
      }
    }
    return false;
  }
  
  return list;
};



