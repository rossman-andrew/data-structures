var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = -1;
  this.end = -1;
  this.storage = {};  
};

Queue.prototype.size = function() {
  if (this.end - this.front < 0 || this.front === -1) {
    return 0;
  }
  return this.end - this.front + 1;
};

Queue.prototype.enqueue = function(value) {
  if (this.front === -1) {
    this.front = 0;
  }
  this.end++;
  var key = this.end;
  this.storage[key] = value;
};

Queue.prototype.dequeue = function() {
  var dequeueKey = this.front;
  this.front += 1;
  if (this.size() === 0) {
    this.front = this.end = -1;
  }
  return this.storage[dequeueKey];
};


