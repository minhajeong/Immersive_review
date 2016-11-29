var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	storage: {}
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
	enqueue: function(value){
      this.storage[Object.keys(this.storage)[this.size()-1]+1] = value;
    },
    dequeue: function(){
      if (this.size() === 0) {
        return ;
      }
      var popped = this.storage[Object.keys(this.storage)[0]];
      delete this.storage[Object.keys(this.storage)[0]];
      return popped;
    },
    size: function(){
      return Object.keys(this.storage).length;
    }
};



