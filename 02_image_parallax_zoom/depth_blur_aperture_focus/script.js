gsap.registerPlugin(ScrollTrigger);

const img = document.querySelector(".blur-img");
const caption = document.querySelector(".card-caption");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".focus-pin",
    start: "top top",
    end: "+=1800",
    scrub: 1,
    pin: true
  }
});

// Clear Gaussian blur & scale down image to 1.0
tl.to(img, {
  filter: "blur(0px)",
  scale: 1.0,
  ease: "none"
}, 0);

// Fade in caption text as image sharpens
tl.to(caption, {
  opacity: 1,
  ease: "power1.out"
}, 0.3);
