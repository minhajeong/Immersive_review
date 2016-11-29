var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next
    }
  };

  list.removeHead = function(){
    if (this.head === null) { //0개
      return ;
    } else if (this.head === this.tail) { //1개
      var temp1 = this.head.value;
      this.head = null;
      this.tail = null;
      return temp1;
    } else { // n
      var temp2 = this.head.value;
      this.head = this.head.next;
      return temp2;
    }
  };

  list.contains = function(target){
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? addToTail: O(1), removeHead: O(1), contains: O(n)
 */
