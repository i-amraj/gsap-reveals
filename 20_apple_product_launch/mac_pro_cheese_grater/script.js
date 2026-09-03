gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pro-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Zoom into one of the holes
tl.to(".cheese-grater-grid", {
  scale: 15,
  opacity: 0, // fade to black as we go through
  duration: 2,
  ease: "power2.in"
})
// Reveal the content inside the machine
.to(".content-reveal", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
}, "-=1");
