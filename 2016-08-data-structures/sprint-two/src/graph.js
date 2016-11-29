var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
	this.edges[node] = [];
};

Graph.prototype.contains = function(node){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i] === node) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for (var i = 0; i < this.nodes.length; i++) {
		if (this.nodes[i] === node) {
			delete this.nodes[i]
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges[fromNode].length; i++) {
		if (this.edges[fromNode][i] === toNode) {
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	//이중배열로 들어가
	this.edges[fromNode].push(toNode);
	this.edges[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges[fromNode].length; i++) {
		if (this.edges[fromNode][i] === toNode) {
			delete this.edges[fromNode][i];
		}
	}
	for (var i = 0; i < this.edges[toNode].length; i++) {
		if (this.edges[toNode][i] === fromNode) {
			delete this.edges[toNode][i];
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	//_.each(this.nodes, cb)
	for (var i = 0; i < this.nodes.length; i++) {
		cb(this.nodes[i]);
	}
};

/*
 * Complexity: What is the time complexity of the above functions? 
 addNode: O(), contains: O(1), removeNode: O(n), hasEdge: O(n), addEdge: O(1), removeEdge: O(n), forEachNode: O(n)
 */



