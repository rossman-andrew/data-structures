var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
  };

  someInstance.pop = function() {
    size--;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
