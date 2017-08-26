var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;  
};

BinarySearchTree.prototype.insert = function(value) {
  var node = {
    value: value,
    left: null,
    right: null
  };
  var travel = function(currentNode) {
    if (node.value <= currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
        return;
      } else {
        travel(currentNode.left);
      }
    } else {
      if (node.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        } else {
          travel(currentNode.right);
        }
      }
    }
  };
  travel(this);  
};

BinarySearchTree.prototype.contains = function(target) {
  var travel = function(currentNode) {
    if (currentNode === null) {
      return false;
    }
    if (currentNode.value === target) {
      return true;
    } else {
      if (target > currentNode.value) {
        return travel(currentNode.right);
      } else {
        return travel(currentNode.left);
      }
    }
  };
  return travel(this);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var travel = function(currentNode) {
    if (currentNode === null) {
      return;
    } else {
      callback(currentNode.value);
      travel(currentNode.left);
      travel(currentNode.right);
    }
  };
  travel(this);
};

BinarySearchTree.prototype.inOrderValues = function() {
  var results = [];
  
  var traverse = function(node) {
    if (node === null) {
      return;
    } else {
      traverse(node.left);
      results.push(node.value);
      traverse(node.right);
    }
  };
  traverse(this);
  return results;
};


/*
 * Complexity: What is the time complexity of the above functions?
 
 Insert - O(log n) - logarithmic time
 Contains - O(log n) - logarithmic time
 depthFirstLog - O(n) - linear time
 inOrderValues - O(n) - linear time
 
 */
