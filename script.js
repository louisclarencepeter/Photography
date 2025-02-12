/**********************************************
 *  REVEAL ON SCROLL
 **********************************************/
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach((elem) => {
    const elementTop = elem.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

// Run the reveal function on scroll
window.addEventListener("scroll", reveal);
// Run it once on page load (in case some elements are already in view)
reveal();

/**********************************************
 *  ASYNCHRONOUS FORM SUBMISSION
 **********************************************/
// Wait until the DOM is fully loaded (only if you place your script in <head>)
// If your script is at the bottom of <body>, you can omit this:
document.addEventListener("DOMContentLoaded", function() {
  // Select the form (adjust the selector to match your HTML)
  const form = document.querySelector('.contact form');

  // If the form exists on this page, set up the submission handler
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop the browser from submitting the form the old way

      // Collect the form data
      const formData = new FormData(form);

      // Send the request via Fetch API
      fetch(form.getAttribute('action'), {
        method: form.getAttribute('method'), // Should be 'post'
        body: formData
      })
      .then((response) => {
        // Check for non-200 responses
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // If your PHP returns JSON, parse as JSON
        return response.json();
      })
      .then((data) => {
        // 'data' contains whatever your PHP script returns
        console.log('Success:', data);

        if (data.success) {
          alert('Message sent successfully!');
          form.reset(); // Clear the form fields
        } else {
          alert('An error occurred. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Network error. Please try again.');
      });
    });
  }
});