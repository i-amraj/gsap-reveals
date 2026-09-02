const tl = gsap.timeline();

// Ambient floating orbs
gsap.to(".orb-1", { y: 100, x: 50, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".orb-2", { y: -80, x: -100, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".orb-3", { scale: 1.2, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

// Float in glass panels
tl.from(".main-panel", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
})
.from(".s1", {
  x: -100,
  y: -50,
  opacity: 0,
  rotation: -30,
  duration: 1.5,
  ease: "power3.out"
}, "-=1")
.from(".s2", {
  x: 100,
  y: 50,
  opacity: 0,
  rotation: 30,
  duration: 1.5,
  ease: "power3.out"
}, "-=1");

// Add subtle mouse parallax to glass panels to sell the 3D depth
const section = document.querySelector(".hero-section");
const main = document.querySelector(".main-panel");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");

section.addEventListener("mousemove", (e) => {
  const nx = (e.clientX / window.innerWidth) - 0.5;
  const ny = (e.clientY / window.innerHeight) - 0.5;
  
  gsap.to(main, { x: nx * 30, y: ny * 30, duration: 1 });
  gsap.to(s1, { x: nx * 60, y: ny * 60, duration: 1 });
  gsap.to(s2, { x: nx * 80, y: ny * 80, duration: 1 });
});
