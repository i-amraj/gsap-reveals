gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const cards = gsap.utils.toArray(".skew-card");

// Main horizontal scroll
gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // Calculate velocity and map it to a skew angle
      // self.getVelocity() returns pixels per second
      let skewAmount = self.getVelocity() / 300;
      
      // Clamp the skew to prevent it from going too crazy
      skewAmount = gsap.utils.clamp(-20, 20, skewAmount);
      
      // Apply skew to all cards using a quick setter for performance
      cards.forEach(card => {
        gsap.to(card, {
          skewX: skewAmount,
          ease: "power1.out",
          duration: 0.1,
          overwrite: "auto"
        });
      });
    }
  }
});

// When scrolling stops, spring back to 0 skew
ScrollTrigger.addEventListener("scrollEnd", () => {
  gsap.to(cards, {
    skewX: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.4)"
  });
});
