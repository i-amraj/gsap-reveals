gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".radar-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Expand rings outwards and fade out
tl.to(".r1", {
  width: 600,
  height: 600,
  opacity: 0.5,
  duration: 1
})
.to(".r2", {
  width: 1000,
  height: 1000,
  opacity: 0.3,
  duration: 1
}, "-=0.8")
.to(".r3", {
  width: 2000,
  height: 2000,
  opacity: 0.1,
  duration: 1
}, "-=0.8")
// And fade out all at the end
.to(".radar-ring", {
  opacity: 0,
  duration: 0.5
});
