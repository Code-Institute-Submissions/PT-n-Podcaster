$(document).ready(function () {
  $(".house").click(function () {
      // over
      $(".revealText").fadeIn(3000);
    });

  $(".house").click(function () {
      // over
      $(".revealText").fadeOut();
    });

    $("nav").click(function(){
        $("ul").toggleClass(dropdown);

    })


});


