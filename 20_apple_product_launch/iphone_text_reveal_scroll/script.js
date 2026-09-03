gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".apple-text-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1 // smooth scrubbing
  }
});

// Line 1 animations
tl.to(".line-1", { opacity: 1, scale: 1, duration: 1 })
  .to(".line-1", { 
    backgroundImage: "linear-gradient(90deg, #fff, #a5b4fc)", 
    duration: 1 
  }, "-=0.5")
  .to(".line-1", { opacity: 0, scale: 1.2, duration: 1 });

// Line 2 animations
tl.to(".line-2", { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
  .to(".line-2", { 
    backgroundImage: "linear-gradient(90deg, #a5b4fc, #c084fc)", 
    duration: 1 
  }, "-=0.5")
  .to(".line-2", { opacity: 0, scale: 1.2, duration: 1 });
