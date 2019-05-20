var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  // slideshow restarts if it reaches the end
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n <= -1) {
    slideIndex = slides.length-1;
  }

  // hides all of the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // hides all of the dots/image selectors
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // shows the active slide and dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
