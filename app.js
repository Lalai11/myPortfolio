//Get reference to the form
const contForm = document.getElementById("contact-form");

// check that the form exists (before you start using it.)
if (contForm) {
  // Disable HTML5 validation - NOTE: "novalidate" is a boolean attribute
  contForm.setAttribute("novalidate", "");

  // Add an event listener to the form's "submit" event (not the "click" event of the submit button...)
  contForm.addEventListener("submit", (event) => {
    // Error message list
    let errorMessages = [];

    // Get reference to the error area
    const errorArea = document.getElementById("error-area");

    // Clear previuos error messages
    errorArea.innerHTML = "";

    // Get references to the form fields
    let nameValue = contForm.elements["txtName"].value.trim();
    let emailValue = contForm.elements["txtEmail"].value.trim();

    // Start checking the validation rules (always check for INVALID data NOT valid!)

    // Check all required fields
    if (nameValue === "" || emailValue === "") {
      // Cancel the submit event (stop the form from submitting)
      event.preventDefault();

      // Display an error message
      errorArea.innerHTML = `<p>Enter all required fields (Name and Email).</p>`;

      // Stop the function (don't continue checking validation rules).
      return;
    }

    // Check name
    if (nameValue.length < 2) {
      // Add error message
      errorMessages.push("First name must be 2 or more characters.");
    }

    // Check email
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue !== "" && !emailRegex.test(emailValue)) {
      errorMessages.push("Email does not appear to be valid.");
    }

    // Check for error.
    if (errorMessages.length > 0) {
      // Cancel the submit event (stop the for from submitting).
      event.preventDefault();

      // Display all error messages.
      errorArea.innerHTML += `<ul><li>${errorMessages.join(
        "</li><li>"
      )}</li></ul>`;
    }
  });
}
// End contact form validation

// Slideshow - Slick plugin - Sunnyspot page
$(document).ready(function () {
  const slideShow = document.getElementById("slideshow");
  if (slideShow) {
    $(".slick-plugin").slick({
      dots: true,
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: "linear",
    });
    $(".slick-plugin").on("click", function () {
      $(".slick-plugin").slick("slickNext");
    });
  }
});
// End Slideshow
