$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);

    var letsDance = function(val){
      val.animate({top:$("body").height() * Math.random(), left: $("body").width() *Math.random(), width:250*Math.random()},1500, 'swing', function(){letsDance(val);});
    };
    letsDance($(".dancer"));
    letsDance($(".jazz"));
    letsDance($(".hiphop"));
  });
   
  $(".lineUp").on("click", function(event){
    for(var i=0; i<window.dancers.length;i++){
      // if(window.dancers[i][0] === 'span.dancer') {
      //   window.dancers[i].css("top", $("body").height()-700);
      // window.dancers[i].css("left", $("body").width()/window.dancers.length*i);
      // window.dancers[i].stop(true);
      // }
      // else if(window.dancers[i][0] === 'span.jazz') {
      //   window.dancers[i].css("top", $("body").height()-500);
      // window.dancers[i].css("left", $("body").width()/window.dancers.length*i);
      // window.dancers[i].stop(true);
      // } else {
      //   window.dancers[i].css("top", $("body").height()-300);
      // window.dancers[i].css("left", $("body").width()/window.dancers.length*i);
      // window.dancers[i].stop(true);
      // }
      window.dancers[i].css("top", $("body").height()-400);
      window.dancers[i].css("left", $("body").width()/window.dancers.length*i);
      window.dancers[i].stop(true);
    }
  });
});   
 
 
 