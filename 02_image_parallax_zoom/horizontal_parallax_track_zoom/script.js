gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".track");
const images = document.querySelectorAll(".track-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-pin",
    start: "top top",
    end: "+=2500",
    scrub: 1,
    pin: true
  }
});

// 1. Move track horizontally left by 2 cards (200vw out of 300vw total width)
tl.to(track, {
  xPercent: -66.6,
  ease: "none"
}, 0);

// 2. Counter parallax shift images in opposite X direction
images.forEach((img) => {
  tl.to(img, {
    xPercent: 25,
    scale: 1.25,
    ease: "none"
  }, 0);
});
