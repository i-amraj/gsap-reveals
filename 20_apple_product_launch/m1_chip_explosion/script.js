gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".chip-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1
  }
});

tl.to(".layer-top", {
  translateZ: 150, // pull top layer way up
  duration: 1
})
.to(".layer-mid", {
  translateZ: 50, // pull mid layer up slightly
  duration: 1
}, "<")
.to(".stat", {
  opacity: 1,
  x: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out"
}, "-=0.5");
