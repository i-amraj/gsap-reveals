gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".plugin-card");
const radius = 300; // Distance from center
const angle = 360 / cards.length;

// Position cards in a 3D circle
cards.forEach((card, i) => {
  gsap.set(card, {
    rotationY: i * angle,
    translateZ: radius
  });
});

// Rotate the entire wheel infinitely
const wheelAnim = gsap.to(".carousel-wheel", {
  rotationY: -360,
  duration: 15,
  repeat: -1,
  ease: "none"
});

// Connect to scroll to speed it up/down
ScrollTrigger.create({
  trigger: ".carousel-section",
  start: "top bottom",
  end: "bottom top",
  onUpdate: (self) => {
    // When scrolling fast, speed up the wheel using timeScale
    const velocity = Math.abs(self.getVelocity());
    let scale = 1 + (velocity / 200);
    
    gsap.to(wheelAnim, {
      timeScale: scale,
      duration: 0.5,
      overwrite: true,
      onComplete: () => {
        // Return to normal speed when scroll stops
        gsap.to(wheelAnim, { timeScale: 1, duration: 1 });
      }
    });
  }
});
