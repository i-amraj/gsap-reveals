gsap.registerPlugin(ScrollTrigger);

const cardA = document.querySelector(".card-a");
const cardB = document.querySelector(".card-b");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".iso-pin",
    start: "top top",
    end: "+=2000",
    scrub: 1,
    pin: true
  }
});

// Card A elevates in 3D Z-space
tl.to(cardA, {
  z: 180,
  scale: 1.15,
  ease: "none"
}, 0);

// Card B glides along isometric X/Y plane
tl.to(cardB, {
  x: -80,
  y: -120,
  z: 90,
  ease: "none"
}, 0);
