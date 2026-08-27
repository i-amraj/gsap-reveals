gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector(".globe-card");
const img = document.querySelector(".globe-img");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".globe-pin",
    start: "top top",
    end: "+=1800",
    scrub: 1,
    pin: true
  }
});

// Expand sphere to 70vw x 65vh rectangular card
tl.to(card, {
  width: "70vw",
  height: "65vh",
  borderRadius: "28px",
  borderColor: "rgba(255, 255, 255, 0.2)",
  ease: "none"
}, 0);

// Counter zoom-out inner image from 1.85 to 1.0
tl.to(img, {
  scale: 1.0,
  ease: "none"
}, 0);
