gsap.registerPlugin(ScrollTrigger);

const cardA = document.querySelector(".card-a");
const cardB = document.querySelector(".card-b");

gsap.set(cardA, { scale: 0.3, rotation: -90, z: -400, opacity: 0 });
gsap.set(cardB, { scale: 0.1, rotation: -180, z: -800, opacity: 0 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".vortex-pin",
    start: "top top",
    end: "+=2200",
    scrub: 1,
    pin: true
  }
});

// Card A spiral zoom
tl.to(cardA, {
  scale: 1.0,
  rotation: 0,
  z: 0,
  opacity: 1,
  ease: "none"
}, 0)
.to(cardA, {
  scale: 2.2,
  rotation: 90,
  z: 500,
  opacity: 0,
  ease: "none"
}, 1);

// Card B spiral zoom following Card A
tl.to(cardB, {
  scale: 1.0,
  rotation: 0,
  z: 0,
  opacity: 1,
  ease: "none"
}, 1);
