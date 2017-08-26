var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = {};
  newTree.childrenNumber = 0;
  newTree.contains = treeMethods.contains;
  newTree.addChild = treeMethods.addChild;
  newTree.getChildren = treeMethods.getChildren;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Object.create(this);
  child.value = value;
  child.childrenNumber = 0;
  child.children = {};
  
  this.children[Number(this.childrenNumber++)] = child;  
};

treeMethods.contains = function(target) {  
  var searchNode = function(node) { 
    if (node.value === target) {
      return true;
    }
    for (var child in node.children) {
      if (searchNode(node.children[child])) {
        return true;
      }
    }
    return false;
  };
  return searchNode(this);
};

treeMethods.getChildren = function() {
  var childrenVals = [];
  for (var key in this.children) {
    childrenVals.push(this.children[key].value);
  }
  return childrenVals.length === 0 ? null : childrenVals;
};


/*
 * Complexity: What is the time complexity of the above functions?
 
addChild - O(1) - Constant time.
contains - O(n) - Linear time.
getChildren - O(n) - Linear time.



 
 */
