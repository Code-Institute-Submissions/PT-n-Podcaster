$(document).ready(function() {


	//home page- PT options

	$("#house-container").mouseover(function() {
		$(".house").fadeTo("medium", 0.15);
		$(".inside").show();
	});

	$("#house-container").mouseleave(function() {
		$(".inside").hide();
		$(".house").fadeTo(1000, 1);
	});

	$("#outside-container").mouseover(function() {
		$(".outdoor").fadeTo("medium", 0.15);
		$(".outside").show();
	});

	$("#outside-container").mouseleave(function() {
		$(".outside").hide();
		$(".outdoor").fadeTo(1000, 1);
	});

	$(".virtual-container").mouseover(function() {
		$(".virtual").fadeTo("medium", 0.15);
		$(".facetime").show();
	});

	$(".virtual-container").mouseleave(function() {
		$(".facetime").hide();
		$(".virtual").fadeTo(1000, 1);
	});

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
  
	//index.html-podcast section, star rating (not working)
    
	const starRating = $("#starRatings").children();
	for (let i = 0; i < starRating.length; i++) {
		starRating[i].addEventListener("mouseover", function() {
           
			for (let j = 1; j <= starRating.length; j++) {
                              
                $(starRating[j]).removeClass("checked");
                
			}
			for (let j = 1; j> i; j--) {
               
                $(starRating[j]).addClass("checked");
                console.log(starRating[j])  
			}
        });
		
		starRating[i].addEventListener("mouseleave", function() {
            for (let j = 1; j <= starRating.length; j++) {
                $(starRating[j]).addClass("checked");
                console.log(j)  
			}
			for (let j = 1; j> i; j--) {
                $(starRating[j]).removeClass("checked");
                console.log(j)  
            }

             });

           
            starRating[i].addEventListener("click", function() {    
                for (let j = 1; j <= starRating.length; j++) {
                $(starRating[j]).addClass("checked");
                console.log(j)  
			}
			for (let j = 1; j> i; j--)  {
                $(starRating[j]).removeClass("checked");
                console.log(j)  
            }

             });       
        }

		//index.html-podcast section, podcast form

		$("#editingEnquiry").click(function() {
			$("#editing").toggle($(this).prop("checked"));
			$("#podBtn").toggle($(this).prop("checked"));

		});

		$("#guestEnquiry").click(function() {
			$("#guest").toggle($(this).prop("checked"));
			$("#podBtn").toggle($(this).prop("checked"));

		});

		$("#mentoringEnquiry").click(function() {
			$("#mentor").toggle($(this).prop("checked"));
			$("#podBtn").toggle($(this).prop("checked"));

        });
        
    });
