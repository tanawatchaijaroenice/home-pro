
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector(".carousel-button--prev");
  const nextButton = carousel.querySelector(".carousel-button--next");

  if (!carousel || !track || !prevButton || !nextButton || slides.length === 0) {
    return;
  }

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    // Each slide occupies 100% of the carousel__container width
    // The carousel__container is designed to show one item at a time
    // So the slideWidth should be the width of the carousel__container
    const carouselContainer = carousel.querySelector(".carousel__container");
    const slideWidth = carouselContainer.offsetWidth; 
    
    const newTransform = -currentIndex * slideWidth;
    track.style.transform = `translateX(${newTransform}px)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= totalSlides - 1;
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Recalculate on window resize
  window.addEventListener("resize", updateCarousel);

  // Initial setup
  updateCarousel();
});
