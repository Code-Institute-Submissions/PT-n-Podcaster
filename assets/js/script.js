
$(document).ready(function(){

  $("#house-container").mouseenter(function () { 
  $(".house").fadeTo(1000, 0.15);
   $(".inside").show();

 });

 $("#house-container").mouseleave(function(){
  $(".inside").hide();
      $(".house").fadeTo(1000,1);
});
 
$("#outside-container").mouseenter(function(){
    $(".outdoor").fadeTo(1000,0.15);
    $(".outside").show();
});

$("#outside-container").mouseleave(function(){
    $(".outside").hide();
    $(".outdoor").fadeTo(1000,1);
    
});

$(".virtual-container").mouseenter(function(){
    $(".virtual").fadeTo(1000,0.15);
    $(".facetime").show();
});

$(".virtual-container").mouseleave(function(){
     $(".facetime").hide();
    $(".virtual").fadeTo(1000,1);
   
});

 });