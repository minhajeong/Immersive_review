var makeHiphopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};
makeHiphopDancer.prototype = Object.create(Dancer.prototype);
makeHiphopDancer.prototype.constructor = makeHiphopDancer;
//makeHiphopDancer.prototype.oldStep = makeHiphopDancer.prototype.step;
makeHiphopDancer.prototype.step = function(){
  this.$node.removeClass('dancer');
  this.$node.addClass('hiphop');
  Dancer.prototype.step.call(this);
  //this.oldStep();
  //this.$node.toggle();
};

