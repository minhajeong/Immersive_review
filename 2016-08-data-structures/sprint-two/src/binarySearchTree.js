var BinarySearchTree = function(value){
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  newBST.insert = function (value) {
    var current = this;
    if (current.value < value) {
      if (current.right === null) {
    	current.right = new BinarySearchTree(value);
      } else {
      	current = current.right.insert(value);
      }
    }
    else if (current.value > value) {
      if (current.left === null) {
    	current.left = new BinarySearchTree(value);
      } else {
        current = current.left.insert(value);
      }
    };
  };
  newBST.contains = function (target) {
  	var current = this;
  	if (current.value === target) {
  	  return true;
  	} else {
  	  if (current.value < target) {
        if (current.right !== null) {
          return current.right.contains(target);
        } else {
          return false;	
        }
      }
      else if (current.value > target) {
        if (current.left !== null) {
          return current.left.contains(target);
        } else {
          return false;
        }
      } 
  	}
  };
  newBST.depthFirstLog = function (callback) {
  	callback(this.value);
  	if (this.right !== null) {
  	  return this.right.depthFirstLog(callback) 
  	}
  	if (this.left !== null) {
  	  return this.left.depthFirstLog(callback);
  	}
  };
  return newBST;

};


/*
 * Complexity: What is the time complexity of the above functions? insert: O(logn), contains: O(logn), depthFisrtLog: O(logn)
 */
