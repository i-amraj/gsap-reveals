// Custom Rough Ease for glitchy stutter
gsap.registerPlugin(CustomEase);
CustomEase.create("glitch", "M0,0 C0.05,0 0.1,1 0.1,1 0.15,1 0.2,0 0.2,0 0.25,0 0.3,1 0.3,1 0.35,1 0.4,0 0.4,0 0.45,0 0.5,1 0.5,1 0.55,1 0.6,0 0.6,0 0.65,0 0.7,1 0.7,1 0.75,1 0.8,0 0.8,0 0.85,0 0.9,1 0.9,1 0.95,1 1,0 1,0");

const tl = gsap.timeline({ delay: 0.5 });

// Fade in base
tl.from(".text-base", { opacity: 0, duration: 0.1 })
// Intense RGB Split
.to(".text-red", { x: -10, y: 5, opacity: 1, duration: 0.1 }, 0.1)
.to(".text-blue", { x: 10, y: -5, opacity: 1, duration: 0.1 }, 0.1)
// Stutter/Glitch effect using custom ease
.to([".text-red", ".text-blue", ".text-base"], {
  x: "random(-15, 15, 5)",
  y: "random(-15, 15, 5)",
  duration: 0.5,
  ease: "glitch",
  repeat: 3,
  yoyo: true
})
// Snap back to normal
.to([".text-red", ".text-blue"], { opacity: 0, x: 0, y: 0, duration: 0.1 })
.to(".text-base", { x: 0, y: 0, duration: 0.1 })
// Reveal subtitle
.to(".subtitle", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

// Re-trigger glitch on hover
document.querySelector(".glitch-wrapper").addEventListener("mouseenter", () => {
  tl.restart();
});
