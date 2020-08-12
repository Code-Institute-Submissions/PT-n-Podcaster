$(document).ready(function () {
  $("#house-container").mouseover(function () {
    $(".house").fadeTo(1000, 0.15);
    $(".inside").show();
  });

  $("#house-container").mouseleave(function () {
    $(".inside").hide();
    $(".house").fadeTo(1000, 1);
  });

  $("#outside-container").mouseover(function () {
    $(".outdoor").fadeTo(1000, 0.15);
    $(".outside").show();
  });

  $("#outside-container").mouseleave(function () {
    $(".outside").hide();
    $(".outdoor").fadeTo(1000, 1);
  });

  $(".virtual-container").mouseover(function () {
    $(".virtual").fadeTo(1000, 0.15);
    $(".facetime").show();
  });

  $(".virtual-container").mouseleave(function () {
    $(".facetime").hide();
    $(".virtual").fadeTo(1000, 1);
  });

  $("#2one").mouseover(function () {
    $("#2one").css("color", "orange");
  });

    $("#2one").mouseleave(function () {
    $("#2one").css("color", "black");
  });

    $("#3one").mouseover(function () {
    $("#2one").css("color", "orange");  
    $("#3one").css("color", "orange");
  });

    $("#3one").mouseleave(function () {
    $("#2one").css("color", "black");
    $("#3one").css("color", "black");
  });

    $("#4one").mouseover(function () {
    $("#2one").css("color", "orange");  
    $("#3one").css("color", "orange");
    $("#4one").css("color", "orange");
  });

    $("#4one").mouseleave(function () {
    $("#4one").css("color", "black");
    $("#2one").css("color", "black");
    $("#3one").css("color", "black");
  });

    $("#5one").mouseover(function () {
    $("#5one").css("color", "orange");
    $("#2one").css("color", "orange");  
    $("#3one").css("color", "orange");
    $("#4one").css("color", "orange");
  });

    $("#5one").mouseleave(function () {
    $("#5one").css("color", "black");
     $("#4one").css("color", "black");
    $("#2one").css("color", "black");
    $("#3one").css("color", "black");
  });


  $(".empty").on("click", function (event) {
    let count;

    function selectedStars(item) {
      count = item.id[0];
      sessionStorage.starRating = count;
      let subid = item.id.substring(1);
      for (let i = 0; i < 5; i++) {
        if (i < count) {
          document.getElementById(i + 1 + subid).style.color = "orange";
        } else {
          document.getElementById(i + 1 + subid).style.color = "black";
        }
        selectedStars(event)
      }
    }

    function result() {
      //Rating : Count
      //Review : Comment(id)
      alert(
        "Rating : " +
          count +
          "\nReview : " +
          document.getElementById("comment").value
      );
    }

    $("#1one", "#2one", "#3one", "4one", "#5one").css("color", "orange");
  });

  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("topicSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchBar");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});
