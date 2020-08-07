
$(document).ready(function(){

  $(".house").mouseenter(function () { 
      $(".revealText").show();
  $(".house").fadeTo(1000, 0.15);

 

 $(".house").mouseLeave(function(){
  $(".revealText").hide();

});
 
 $(".virtual").mouseenter(function () { 
      $(".revealText").show();
  $(".virtual").fadeTo(1000, 0.15);

});


});

 });