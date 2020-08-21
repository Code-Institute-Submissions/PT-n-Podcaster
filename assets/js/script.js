$(document).ready(function() {


    //Virtual.html - image animation
    
	$(".remoteContainer").mouseover(function() {
		$(".remote").slideDown("slow");
	});
	$(".remoteContainer").mouseleave(function() {
		$(".remote").slideUp("slow");
	});

    //all 3 PT pages- Rates
    
	$("#session1").mouseover(function() {
		$("#cost1").css("background-color", "#4A4930");
		$("#cost1").css("color", "#fafafa");
	});

	$("#session1").mouseleave(function() {
		$("#cost1").css("background-color", "#edf2ef");
		$("#cost1").css("color", "black");
	});


	$("#session2").mouseover(function() {
		$("#cost2").css("background-color", "#4A4930");
		$("#cost2").css("color", "#fafafa");
	});

	$("#session2").mouseleave(function() {
		$("#cost2").css("background-color", "#edf2ef");
		$("#cost2").css("color", "black");
	});


	$("#session3").mouseover(function() {
		$("#cost3").css("background-color", "#4A4930");
		$("#cost3").css("color", "#fafafa");
	});

	$("#session3").mouseleave(function() {
		$("#cost3").css("background-color", "#edf2ef");
		$("#cost3").css("color", "black");
	});

	$("#session4").mouseover(function() {
		$("#cost4").css("background-color", "#4A4930");
		$("#cost4").css("color", "#fafafa");
	});

	$("#session4").mouseleave(function() {
		$("#cost4").css("background-color", "#edf2ef");
		$("#cost4").css("color", "black");
	});
  
//footer, modal button for terms (not working)

$('#footerTerms').on('click', function () {
  $('#modalInput').show();
  console.log();
});


    });

    