

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) { 
    this._storage[index] = [];
  }
  var keyVal = [k, v];
  this._storage[index].forEach(function(keyValPairs, i, collection) {
    if (keyValPairs[0] === k) {
      collection[i] = keyVal;
      return;
    }
  });
  this._storage[index].push(keyVal);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  }
  if (this._storage[index].length === 1) {
    return this._storage[index][0][1];
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
  
  return this._storage[index][0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
  
  Insert = Average case: O(1), constant time. Worst case: O(n), linear time.
  Retrieve = Average case: O(1), constant time. Worst case: O(n), linear time.
  Remove = O(1), constant time.

 */



