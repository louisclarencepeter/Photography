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

// Get a reference to the checkbox element
const checkbox = document.querySelector('.checkbox');

// Get a reference to the menu items container
const menuItems = document.querySelector('.menu-items');

// Add an event listener to the checkbox to toggle the 'active' class
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Checkbox is checked, add the 'active' class to menu items
    menuItems.classList.add('active');
  } else {
    // Checkbox is unchecked, remove the 'active' class from menu items
    menuItems.classList.remove('active');
  }
});
