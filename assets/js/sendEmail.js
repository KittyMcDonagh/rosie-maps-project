function sendMail(contactForm) {

    console.log("from_name "+contactForm.name.value);
    console.log("from_email "+contactForm.emailaddress.value);
    console.log("project_request "+contactForm.projectsummary.value);

    emailjs.send("gmail", "kitty", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}
