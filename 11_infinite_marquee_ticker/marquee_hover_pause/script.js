// 1. Create the base infinite loop tween
let marqueeTween = gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

const container = document.querySelector(".marquee-container");

// 2. Smoothly decelerate to 0 timeScale on hover
container.addEventListener("mouseenter", () => {
  gsap.to(marqueeTween, {
    timeScale: 0,
    duration: 0.5,
    ease: "power2.out",
    overwrite: true
  });
});

// 3. Smoothly accelerate back to 1 timeScale on leave
container.addEventListener("mouseleave", () => {
  gsap.to(marqueeTween, {
    timeScale: 1,
    duration: 0.5,
    ease: "power2.in", // 'in' ease makes the acceleration feel snappy
    overwrite: true
  });
});
