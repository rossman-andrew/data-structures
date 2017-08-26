var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) > -1;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index > -1) {
    this._storage.splice(index, 1);
  }
};

setPrototype.getOverlap = function(set2) {
  return this._storage.filter(item => set2.contains(item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 Add = O(1): constant time
 Contains = O(n): linear time
 Remove = O(n): linear time
 getOverlap = O(n): linear time
 
 */
