$(document).ready(function () {
  $("#houseAnimation").hover(function () {
      // over
      $(".house").slideUp(1000);
    }, function () {
      $(".house").slideDown(1000);
      // out
    }
  );
});