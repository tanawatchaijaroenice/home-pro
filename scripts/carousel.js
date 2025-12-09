document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".waste-solutions .carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel__track");
    if (!track) return;

    const slides = Array.from(track.children);
    const prevButton = carousel.querySelector(".carousel-button--prev");
    const nextButton = carousel.querySelector(".carousel-button--next");
    const dotsContainer = carousel.querySelector(".carousel__dots");

    console.log("--- Carousel Debug ---");
    console.log("Carousel element:", carousel);
    console.log("Track:", track);
    console.log("Slides length:", slides.length);
    console.log("Prev Button:", prevButton);
    console.log("Next Button:", nextButton);

    if (!track || !prevButton || !nextButton || slides.length === 0) {
      console.error("Carousel initialization failed for:", carousel, {
        track,
        prevButton,
        nextButton,
        slidesLength: slides.length,
      });
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    track.style.width = `${totalSlides * 100}%`;
    slides.forEach((slide) => {
      slide.style.width = `${100 / totalSlides}%`;
    });

    const updateCarousel = () => {
      const translatePercentage = -(currentIndex * (100 / totalSlides));
      track.style.transform = `translateX(${translatePercentage}%)`;

      if (dotsContainer) {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
        });
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide(); // Ensure no multiple intervals are running
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }, 2500); // Change slide every 4 seconds
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    nextButton.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
      startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
      stopAutoSlide();
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
      startAutoSlide();
    });

    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);

    // Initial setup
    updateCarousel();
    startAutoSlide();
  });
});
