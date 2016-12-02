var Dancer = function(top, left, timeBetweenSteps){
  //파라메터값 따로 저장. for reusing in step funtion.
  this.timeBetweenSteps = timeBetweenSteps;
  //Node 생성 > Node는 dancer를 가지고 있는 span.
  this.$node = $('<span class="dancer"></span>');
  //Call the step(), setPosition()
  this.step();
  this.setPosition(top, left);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // bind() 사용 시 해당 함수에서 사용하는 this 참조값 고정
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
  // 이 top과 left는 Dancer의 top, left가 아님
  var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};
