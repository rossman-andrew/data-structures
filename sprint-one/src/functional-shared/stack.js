var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {sizeOf: 0};
  stackObj.storage = {};
  stackObj.push = stackMethods.push;
  stackObj.pop = stackMethods.pop;
  stackObj.size = stackMethods.size;
  return stackObj;
};

var stackMethods = {
  size: function() {
    return this.sizeOf;
  },
  push: function(value) {
    var key = this.sizeOf;
    this.storage[key] = value;
    this.sizeOf++;
  },
  pop: function() {
    if (this.sizeOf === 0) {
      return;
    }
    this.sizeOf--;
    //console.log('This is sizeOf ' + this.sizeOf);
    //console.log(this.storage);
    var key = this.sizeOf;
    return this.storage[key];
  }
};

// Stack();

