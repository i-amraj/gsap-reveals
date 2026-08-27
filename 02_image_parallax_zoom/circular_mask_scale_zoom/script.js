gsap.registerPlugin(ScrollTrigger);

const maskLayer = document.querySelector(".circle-mask-layer");
const img = document.querySelector(".circle-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".circle-pin",
    start: "top top",
    end: "+=1800",
    scrub: 1,
    pin: true
  }
});

// Expand circle mask to 100% full screen
tl.to(maskLayer, {
  clipPath: "circle(100% at 50% 50%)",
  ease: "none"
}, 0);

// Counter zoom-out inner image from scale 2.2 to 1.0
tl.to(img, {
  scale: 1.0,
  ease: "none"
}, 0);
