function sendMail(contactForm){
    emailjs.send("gmail" , "pt_form", {
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "pt_enquiry":contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
   function(error){
       console.log("FAILED", error);
   });
}
