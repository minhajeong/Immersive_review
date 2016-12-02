var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
//makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;
makeBlinkyDancer.prototype.step = function(){
  //this.oldStep();
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
