function sendPtFormMail(contactForm) {
  emailjs
    .send("gmail", "pt_form", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      pt_enquiry: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
       $('#emailModal').modal({
  keyboard: false
})
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
}

function sendPodcastMail(contactForm) {
  emailjs
    .send("gmail", "podcast_form", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      editing_enquiry: contactForm.editing.value,
      guest_enquiry: contactForm.guest.value,
      mentoring_enquiry: contactForm.mentor.value,
     
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);      
        $('#emailModal').modal({
  keyboard: false
})
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
}
