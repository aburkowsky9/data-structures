// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  //if (node === null) throw new Error('Cannot add null');
  if (this.vertices.hasOwnProperty(node)) {
    this.vertices[node] = node;
  } else {
    this.vertices[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(1)
  return this.vertices[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n)
  for (const vertex in this.vertices) {
    const index = this.vertices[vertex].indexOf(node);
    if (index !== -1) {
      this.vertices[vertex].splice(index, 1);
    }
  }
  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(1)
  return this.vertices[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  if (this.vertices[fromNode] && this.vertices[toNode]) {
    this.vertices[fromNode].push(toNode);
    this.vertices[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(1)
  this.vertices[fromNode].splice(this.vertices[fromNode].indexOf(toNode), 1);
  this.vertices[toNode].splice(this.vertices[toNode].indexOf(toNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  for (const vertex in this.vertices) {
    cb(vertex);
  }
};


