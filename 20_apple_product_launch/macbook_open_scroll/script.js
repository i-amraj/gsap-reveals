gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mac-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

tl.to(".macbook-lid", {
  rotationX: 0, // open the lid
  duration: 2,
  ease: "power2.inOut"
})
.to(".screen h1", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "back.out(1.7)"
}, "-=0.5");
