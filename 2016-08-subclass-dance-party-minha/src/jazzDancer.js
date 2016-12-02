var makeJazzDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};
makeJazzDancer.prototype = Object.create(Dancer.prototype);
makeJazzDancer.prototype.constructor = makeJazzDancer;
//makeJazzDancer.prototype.oldStep = makeJazzDancer.prototype.step;
makeJazzDancer.prototype.step = function(){
  this.$node.removeClass('dancer');
  this.$node.addClass('jazz');
  Dancer.prototype.step.call(this);
  //this.oldStep();
  //this.$node.toggle();
};

