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
    
    //index.html-podcast section, star rating 
    const starRating = document.querySelectorAll(".fa-star");
    // console.log(starRating);

    for (let i =0; i< starRating.length; i++){
        starRating[i].addEventListener("mouseover",function(){
// console.log(starRating[i]);
            for (let j=1; j<=i; j++){
                starRating[j].classList.add("checked");
            }
        })
starRating[i].addEventListener("mouseleave",function(){
// console.log(starRating[i]);
            for (let j=1; j<=starRating.length; j++){
                starRating[j].classList.remove("checked");
            }
        })
    starRating[i].addEventListener("click",function(){
// console.log(starRating[i]);
            for (let j=1; j<=starRating.length; j++){
                if(j<=i){
                    starRating[j].classList.add("isClicked");
                }
                else{
                    starRating[j].classList.remove("isClicked");
                }
            
            }
        })
    
    }
  //index.html-podcast section, podcast review

const input = document.querySelector("#comment");
    const button = document.querySelector("#reviewBtn");
    const review = document.querySelector("#reviewText");
    button.addEventListener("click",function(){
        review.textContent = input.value;
    });


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

    function filterFunction() {
    let input, filter, div, a, i;
    input = document.getElementById("searchBar");
    console.log()
    filter= input.value.toLowerCase();
    div = document.getElementById("buzzTopics");
    a = document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
}

};

//footer, modal button for terms (not working)

$('#footerTerms').on('click', function () {
  $('#modalInput').show();
  console.log();
});


const toTop=document.querySelector(".toTop");
window.addEventListener("scroll" , () => {
    if (window.pageYOffset>100){
        toTop.classList.add("active");
    } else {toTop.classList.remove("active");
}
});