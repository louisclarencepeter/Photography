document.addEventListener('scroll', function() {
  const objects = document.querySelectorAll('.scroll-appear');

  // Loop through each object
  for (const i = 0; i < objects.length; i++) {
    const object = objects[i];
    const objectPosition = object.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Check if the object is in the viewport
    if (objectPosition - windowHeight <= 0) {
      object.classList.add('scroll-appear-active'); // Add active class to trigger appearance animation
    }
  }
});