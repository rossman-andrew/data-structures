

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.indexOf(node) > -1 ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeIndex = this.vertices.indexOf(node);
  //nodeIndex > -1 ? this.vertices.splice(nodeIndex, 1) : null;
  if (nodeIndex > -1) {
    this.vertices.splice(nodeIndex, 1);
    this.edges.forEach(function(connection, index, collection) {
      if (connection[0] === node || connection[1] === node) {
        collection.splice(index, 1);
      }
    });
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  this.edges.forEach(function(edgeArray) {
    if (edgeArray[0] === fromNode && edgeArray[1] === toNode || edgeArray[1] === fromNode && edgeArray[0] === toNode) {
      found = true;
      return;
    }
  });
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeEdges = [fromNode, toNode];
  this.edges.push(nodeEdges);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges.forEach(function(edgeArr, index, collection) {
    if (edgeArr[0] === fromNode && edgeArr[1] === toNode || edgeArr[0] === toNode && edgeArr[1] === fromNode) {
      collection.splice(index, 1);
      return;
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vertices.forEach(function(nodes) {
    cb(nodes);
  });   
};

Graph.prototype.getEdgeCount = function(node) {
  return this.edges.reduce(function(memo, edgeArray) {
    if (edgeArray[0] === node || edgeArray[1] === node) {
      memo += 1; 
    }
    return memo;
  }, 0);
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addNode - O(1) - Constant time.
 contains - O(n) - Linear time.
 removeNode - O(n^2) - Quadratic time.
 hasEdge - O(n) - Linear time.
 addEdge - O(1) - Constant time.
 removeEdge - O(n^2) - Quadratic time.
 forEachNode - O(n) - Linear time.
 getEdgeCount - O(n) - Linear time.
 
 */



