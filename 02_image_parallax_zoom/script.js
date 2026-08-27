gsap.registerPlugin(ScrollTrigger);

// Target all parallax card images
const parallaxImages = document.querySelectorAll(".parallax-img");

parallaxImages.forEach((img) => {
  const card = img.closest(".parallax-card");

  gsap.to(img, {
    scale: 1.35,        // Smooth scale-up zoom effect
    yPercent: 18,       // Parallax vertical translation shift
    ease: "none",
    scrollTrigger: {
      trigger: card,
      start: "top bottom", // Starts when top of card enters bottom of viewport
      end: "bottom top",   // Ends when bottom of card leaves top of viewport
      scrub: 1.2           // Smooth physics lag scrub
    }
  });
});
