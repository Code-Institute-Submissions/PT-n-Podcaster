$(document).ready(function () {
  $("#house-container").mouseover(function () {
    $(".house").fadeTo("medium", 0.15);
    $(".inside").show();
  });

  $("#house-container").mouseleave(function () {
    $(".inside").hide();
    $(".house").fadeTo(1000, 1);
  });

  $("#outside-container").mouseover(function () {
    $(".outdoor").fadeTo("medium", 0.15);
    $(".outside").show();
  });

  $("#outside-container").mouseleave(function () {
    $(".outside").hide();
    $(".outdoor").fadeTo(1000, 1);
  });

  $(".virtual-container").mouseover(function () {
    $(".virtual").fadeTo("medium", 0.15);
    $(".facetime").show();
  });

  $(".virtual-container").mouseleave(function () {
    $(".facetime").hide();
    $(".virtual").fadeTo(1000, 1);
  });
//i want the text to go onto the photo
$(".remoteContainer").mouseover(function(){
    $(".remote").slideDown("slow");
});
$(".remoteContainer").mouseleave(function(){
    $(".remote").slideUp("slow");
});


$("#session1").mouseover(function(){
    $("#cost1").css("background-color", "#4A4930");
    $("#cost1").css("color", "#fafafa" );
});

$("#session1").mouseleave(function(){
    $("#cost1").css("background-color", "#CAC9AE");
    $("#cost1").css("color", "black");
});


$("#session2").mouseover(function(){
    $("#cost2").css("background-color", "#4A4930");
    $("#cost2").css("color", "#fafafa" );
});

$("#session2").mouseleave(function(){
    $("#cost2").css("background-color", "#CAC9AE");
    $("#cost2").css("color", "black");
});


$("#session3").mouseover(function(){
    $("#cost3").css("background-color", "#4A4930");
    $("#cost3").css("color", "#fafafa" );
});

$("#session3").mouseleave(function(){
    $("#cost3").css("background-color", "#CAC9AE");
    $("#cost3").css("color", "black");
});

$("#session4").mouseover(function(){
    $("#cost4").css("background-color", "#4A4930");
    $("#cost4").css("color", "#fafafa" );
});

$("#session4").mouseleave(function(){
    $("#cost4").css("background-color", "#CAC9AE");
    $("#cost4").css("color", "black");
});


//not working

const starRating=document.getElementById("starRatings").children;
    for(let i=0; i<starRating.length; i++){
        starRating[i].addEventListener("mouseover",function(){
            //console.log(i)
            for (let j=0; j<=starRating.length; j++){
                starRating[j].removeClass("checked");
                starRating[j].addClass("fa-star");
            }
            for (let j=0; j<=i; j++){
                starRating[j].removeClass("fa-star");
                starRating[j].addClass("checked");
            }
        })
        starRating[i].addEventListener("click",function(){
            let index;
            index=i;
        })
        starRating[i].addEventListener("mouseleave",function(){
            for(let j=0; j<=starRating.length; j++){
                starRating[j].removeClass("checked");
                starRating[j].addClass("fa-star");
            }
            for(let j=0; j<=index; j++){
            starRating[j].removeClass("fa-star");
               starRating[j].addClass("checked");
            };
})


const editingEnquiry=document.getElementById("editingEnquiry");
const guestEnquiry=document.getElementById("guestEnquiry");
const mentoringEnquiry=document.getElementById("mentoringEnquiry");


$("#editingEnquiry").click(function () {
$("#editing").show();
$("#podBtn").show();

});

$("#guestEnquiry").click(function () {
$("#guest").show();
$("#podBtn").show();

});

$("#mentoringEnquiry").click(function () {
$("#mentor").show();
$("#podBtn").show();

});


//not working
const comment=document.getElementById("comment"); 
const reviewBtn=document.getElementById("reviewBtn");
const reviewBox=document.getElementById("reviewBox");

$("#reviewBtn").click(function () {
 const value = comment.value;
  console.log(value);
  if (value){
        localStorage.setItem(value);
        location.reload();
  }
});
    for (let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const value =localStorage.getItem(key);

        reviewBox.innerHTML += `${key}: ${value} <br />`;

}}

})