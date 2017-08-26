var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeToAdd = new Node(value);
    if (this.head === null) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      this.tail.next = nodeToAdd;
      this.tail = nodeToAdd;
    }
  };

  list.removeHead = function() {
    var headVal = this.head.value;
    this.head = this.head.next;
    return headVal;
  };

  list.contains = function(target) {
    var searchList = function(node) {
      if (node === null) {
        return false;
      } else {
        if (node.value === target) {
          return true;
        } else {
          return searchList(node.next);
        }
      }
    };
    return searchList(this.head);
  };
  
  list.insert = function(value) {
    var nodeToAdd = new Node(value);
    var shadow = null;
    var travel = this.head;
    
    while (nodeToAdd.value > travel.value) {
      shadow = travel;
      travel = travel.next;
    }
    nodeToAdd.next = travel;
    shadow.next = nodeToAdd;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addToTail - O(1) - Constant time.
 removeHead - O(1) - Constant time.
 contains - O(n) - Linear time.
 
 
 */
