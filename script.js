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

