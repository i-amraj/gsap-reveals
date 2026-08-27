gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector(".tilt-card");
const img = document.querySelector(".tilt-img");
const glare = document.querySelector(".glare-layer");

// 1. Scroll-Triggered Parallax Movement
gsap.to(img, {
  yPercent: 18,
  ease: "none",
  scrollTrigger: {
    trigger: ".tilt-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

// 2. Interactive Mouse 3D Tilt Interpolation
const xTo = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
const yTo = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 15; // Max 15deg
  const rotateX = -((y - centerY) / centerY) * 15; // Max 15deg

  xTo(rotateY);
  yTo(rotateX);

  // Position glare layer
  const glareX = (x / rect.width) * 100;
  const glareY = (y / rect.height) * 100;
  glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)`;
});

card.addEventListener("mouseleave", () => {
  xTo(0);
  yTo(0);
});
