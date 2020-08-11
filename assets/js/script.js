
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

$(".fa-star").mouseover(function () { 
$("#1one","#2one","#3one","4one","#5one").css("color", "orange");
    
});

$("starmark").on("click" , function () { 
    let count;

function starmark(item)
{
count=item.id[0];
sessionStorage.starRating = count;
let subid= item.id.substring(1);
for(let i=0;i<5;i++)
{
if(i<count)
{
document.getElementById((i+1)+subid).style.color="orange";
}
else
{
document.getElementById((i+1)+subid).style.color="black";
}


}

}

function result()
{
//Rating : Count
//Review : Comment(id)
alert("Rating : "+count+"\nReview : "+document.getElementById("comment").value);
}

$("#1one","#2one","#3one","4one","#5one").css("color", "orange");
    
});





 });