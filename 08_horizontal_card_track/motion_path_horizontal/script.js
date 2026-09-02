gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const section = document.getElementById('path-section');
const cards = gsap.utils.toArray('.card');

// Ensure GSAP knows to show them once placed
gsap.set(cards, { opacity: 1 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "+=3000", // 3000px of scrolling gives plenty of room
    pin: true,
    scrub: 1
  }
});

// Animate all cards along the path
tl.to(cards, {
  motionPath: {
    path: "#snake-path",
    align: "#snake-path",
    alignOrigin: [0.5, 0.5], // Center the card on the line
    autoRotate: true // Rotates the card to face the direction of the path!
  },
  ease: "none",
  stagger: {
    amount: 0.5 // Delays each card so they form a train instead of overlapping exactly
  }
});
