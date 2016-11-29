var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.storage[Object.keys(this.storage)[this.size()-1]+1] = value;
};
Queue.prototype.dequeue = function(){
    if (this.size() === 0) {
      return ;
    }
    var popped = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return popped;
};
Queue.prototype.size = function(){
    return Object.keys(this.storage).length;
};


