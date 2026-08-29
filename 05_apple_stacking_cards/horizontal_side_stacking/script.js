gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".h-scroll-section");
const track = document.querySelector(".h-track");
const wrappers = gsap.utils.toArray(".h-card-wrapper");

// We animate the track horizontally based on vertical scroll
gsap.to(track, {
  xPercent: -100 * (wrappers.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: section,
    pin: true,
    start: "top top",
    end: () => `+=${track.offsetWidth}`,
    scrub: 0.5,
  }
});

// Since we use CSS `position: sticky; left: 0;` on the wrappers, they automatically stack!
// We just need to add the scale-down and darken effect manually as they get covered.
wrappers.forEach((wrapper, i) => {
  const card = wrapper.querySelector(".h-card");
  
  if (i < wrappers.length - 1) {
    // We animate the current card scaling down exactly when the track has moved 1 index to the left
    gsap.to(card, {
      scale: 0.85,
      filter: "brightness(0.3)",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // Map the animation exactly to when this specific card gets covered by the next
        // scrub through the horizontal space of 1 viewport width
        start: () => `top top-=${window.innerWidth * i}`,
        end: () => `top top-=${window.innerWidth * (i + 1)}`,
        scrub: true,
      }
    });
  }
});
