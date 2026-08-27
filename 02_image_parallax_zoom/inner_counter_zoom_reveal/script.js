gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector(".expand-card");
const img = document.querySelector(".counter-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true
  }
});

// Expand card container to 100vw x 100vh
tl.to(card, {
  width: "100vw",
  height: "100vh",
  borderRadius: "0px",
  ease: "none"
}, 0);

// Counter-scale image from 1.65 down to 1.0
tl.to(img, {
  scale: 1.0,
  ease: "none"
}, 0);
