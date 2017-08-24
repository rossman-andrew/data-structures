var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeOf = 0;
  this.storage = {};
};

Stack.prototype.size = function() { return this.sizeOf; },

Stack.prototype.push = function(value) { 
  var key = this.sizeOf;
  this.sizeOf++;
  this.storage[key] = value;
};

Stack.prototype.pop = function() { 
  if (this.sizeOf === 0) {
    return 0;
  }
  var key = this.sizeOf - 1;
  this.sizeOf--;
  return this.storage[key];
};

