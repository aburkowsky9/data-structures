

// Instantiate a new graph
var Graph = function(value) {
  this.edges = {};
  this.nodes = {};
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  this.nodes[node] = new Graph(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {// 0(1)
  return Boolean(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(n)
  var graph = this;
  graph.forEachNode(function(item) {
    if (graph.hasEdge(item, node)) {
      graph.removeEdge(item, node);
    }
  });
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(1)
  var fromN = this.nodes[fromNode];
  return Boolean(fromN.edges[toNode] === toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  var fromN = this.nodes[fromNode];
  var toN = this.nodes[toNode];
  fromN.edges[toNode] = toNode;
  toN.edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(1)
  var fromN = this.nodes[fromNode];
  var toN = this.nodes[toNode];
  delete fromN.edges[toNode];
  delete toN.edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  var nodeList = this.nodes; 
  for (var key in nodeList) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */