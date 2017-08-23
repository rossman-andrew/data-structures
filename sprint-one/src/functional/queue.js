var Queue = function() {
  var someInstance = {};
  // var front = -1;
  // var end = -1;
  var front = 0;
  var end = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // if (front === -1) {
    //   front = 0;
    // }
    // end++;
    someInstance[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    // if (front > end) {
    //   front = -1;
    //   end = -1;
    //   return;
    // }
    return someInstance[front++];
  };

  someInstance.size = function() {
    // if (front === -1) {
    //   return 0;
    // }
    return end - front < 0 ? 0 : end - front;
  };

  return someInstance;
};
