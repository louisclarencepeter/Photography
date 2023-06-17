// smooth scrolling

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// Maximize the size of the element on hover

function increaseOnHover(className, increaseAmount) {
  const elements = document.getElementsByClassName(className);

  // Add event listeners to each element with the specified class
  Array.from(elements).forEach(function(element) {
    // Store the original size of the element
    const originalSize = window.getComputedStyle(element).fontSize;

    // Increase the size on hover
    element.addEventListener("mouseover", function() {
      element.style.fontSize = parseInt(originalSize) + increaseAmount + "px";
    });

    // Reset the size when the mouse moves out
    element.addEventListener("mouseout", function() {
      element.style.fontSize = originalSize;
    });
  });
}

// Call the function with class name and increase amount
increaseOnHover("myElement", 4); // Increase size by 4 pixels on hover

