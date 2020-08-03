$(document).ready(function () {
  $(".house").click(function () {
      // over
      $(".revealText").fadeIn('slow');
    });

  $(".house").click(function () {
      // over
      $(".revealText").fadeOut('slow');
    });

    $("nav").click(function(){
        $("ul").toggleClass(dropdown);

    })


});


