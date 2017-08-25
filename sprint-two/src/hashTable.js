

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
  console.log(this._storage[index][0]);
  console.log(this._storage[index].length);
  if (this._storage[index].length === 1) {
    return this._storage[index][0][1];
  } else {
    this._storage[index].forEach(function(keyValPairs) {
      if (keyValPairs[0] === k) {
        return keyValPairs[1];
      }
    });
  }
  
  // return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


