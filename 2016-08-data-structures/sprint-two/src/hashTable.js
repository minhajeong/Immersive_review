var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (typeof this._storage[i] !== 'object') {
  	this._storage[i] = {};
  }
  this._storage[i][k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i][k] === undefined) {
  	return null;
  } else {
  	return this._storage[i][k];
  };
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i][k];
};



/*
 * Complexity: What is the time complexity of the above functions? insert: O(1), retrieve: O(1), remove: O(1)
 */
