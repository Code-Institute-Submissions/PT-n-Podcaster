$(document).ready(function () {
  $("#houseAnimation").hover(function () {
      // over
      $(".revealText").slideUp(1000);
    }, function () {
      $(".revealText").slideDown(1000);
      // out
    }
  );

$().carousel(function(){
    $(".carousel-item").next(2000);

});

})
