const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

function toggleClass() {
  this.classList.toggle("open");
  nav.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleClass);
window.onresize = () => {
  if (window.outerWidth > 500) {
    nav.classList.remove("open");
    menuBtn.classList.remove("open");
  }
};

const slides = document.querySelectorAll(".slider__item");
const next = document.querySelector(".slider__control--next");
const prev = document.querySelector(".slider__control--previous");
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class

  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.style.animation = "slideLeft .5s ease-out";
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].style.animation = "slideLeft .5s ease-out";
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.style.animation = "slideRight .5s ease-out";

    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].style.animation = "slideRight .5s ease-out";
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
