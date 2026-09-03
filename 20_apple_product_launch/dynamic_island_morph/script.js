gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".island-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

tl.to(".dynamic-island", {
  width: "260px", // expand width
  height: "70px", // expand height
  borderRadius: "35px",
  duration: 1,
  ease: "elastic.out(1, 0.7)"
})
.to(".island-content", {
  opacity: 1,
  duration: 0.5
}, "-=0.5")
.to(".hero-text h1", {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out"
}, "-=1");
