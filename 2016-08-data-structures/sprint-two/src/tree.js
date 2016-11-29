var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = new Tree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target){
  if (this.value === target) {
  	return true;
  } else {
  	for (var i = 0; i < this.children.length; i++) {
  		if (this.children[i].contains(target)) {
  			return true;
  		}
  	}
  	return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions? addChild: O(logn), contains: O(logn)
 */
