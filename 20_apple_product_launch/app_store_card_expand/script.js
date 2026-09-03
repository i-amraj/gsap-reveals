gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-hero",
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});

// Remove display none so GSAP can animate it
tl.set(".hidden-text", { display: "block" });

tl.to(".app-card", {
  width: "100vw",
  height: "100vh",
  borderRadius: "0px",
  duration: 1,
  ease: "power3.inOut"
})
.to(".card-image", {
  height: "50vh",
  duration: 1
}, "<")
.to(".hidden-text", {
  opacity: 1,
  y: 20,
  duration: 0.5
}, "-=0.5");
