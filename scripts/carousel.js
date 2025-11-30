/**
 * Carousel functionality for image galleries
 * Manages dot indicators for multiple carousel instances
 */
document.addEventListener("DOMContentLoaded", () => {
  // Select all carousel instances
  const carouselInstances = document.querySelectorAll(".carousel");

  carouselInstances.forEach((carousel) => {
    const container = carousel.querySelector(".carousel__container");
    const track = carousel.querySelector(".carousel__track");
    const dotsContainer = carousel.querySelector(".carousel__dots");

    if (!container || !track || !dotsContainer) {
      return;
    }

    const slides = track.querySelectorAll(".carousel__slide");
    const totalSlides = slides.length;

    // Generate navigation dots
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("carousel__dot");
      dot.title = `Slide ${i + 1}`;
      dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll(".carousel__dot");

    // Update active dot based on scroll position
    const updateDots = () => {
      const slideWidth = container.clientWidth;

      // Prevent division by zero if element is not rendered
      if (slideWidth === 0) return;

      const scrollLeft = container.scrollLeft;
      // Use rounding for floating point accuracy
      const currentIndex = Math.round(scrollLeft / slideWidth);

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("carousel__dot--active");
        } else {
          dot.classList.remove("carousel__dot--active");
        }
      });
    };

    // Listen for scroll events
    container.addEventListener("scroll", updateDots);

    // Set initial state with a small delay for proper rendering
    setTimeout(updateDots, 100);
  });
});
