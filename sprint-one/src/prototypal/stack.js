var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackStorage = Object.create(stackMethods);
  stackStorage.sizeOf = 0;
  return stackStorage;
};


var stackMethods = {
  size: function() { return this.sizeOf; },
  push: function(value) { 
    var key = this.sizeOf;
    this.sizeOf++;
    this[key] = value;
  },
  pop: function() { 
    if (this.sizeOf === 0) {
      return 0;
    }
    var key = this.sizeOf - 1;
    this.sizeOf--;
    return this[key];
  }
};

//Stack.prototype = stackMethods;


