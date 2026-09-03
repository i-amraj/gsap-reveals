gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".siri-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Animate bars to random heights on scrub
tl.to(".bar", {
  height: () => Math.random() * 150 + 20, // random height for waveform
  stagger: 0.1,
  duration: 1,
  ease: "power1.inOut"
})
// Introduce the text
.to(".siri-text h1", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "back.out(2)"
}, "-=0.5")
// Animate bars again to new random heights for continuous feeling
.to(".bar", {
  height: () => Math.random() * 150 + 20,
  stagger: 0.1,
  duration: 1,
  ease: "power1.inOut"
});
