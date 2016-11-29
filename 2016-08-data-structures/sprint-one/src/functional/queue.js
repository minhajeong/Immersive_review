var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[Object.keys(storage)[someInstance.size()-1]+1] = value;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() === 0) {
      return ;
    }
    var popped = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return popped;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
