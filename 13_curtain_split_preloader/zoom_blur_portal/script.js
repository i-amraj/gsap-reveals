const counterText = document.querySelector(".counter-text");
const counterContainer = document.querySelector(".counter-container");
let proxy = { val: 0 };

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "auto";
  }
});

// Phase 1: Count up
tl.to(proxy, {
  val: 100,
  duration: 2.5,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Counter text scales down and disappears
tl.to(counterContainer, {
  scale: 0.5,
  opacity: 0,
  duration: 0.3,
  ease: "power2.in"
});

// Phase 3: The Zoom Blur Portal effect
// We scale the massive colored wrapper UP (towards the camera),
// blur it, and fade it out, simulating flying through it.
tl.to(".preloader-wrapper", {
  scale: 15,
  opacity: 0,
  filter: "blur(30px)",
  duration: 1.2,
  ease: "power3.in"
}, "-=0.1");

// Phase 4: Hero Content Reveal (Scale it from small to normal to enhance depth)
tl.from(".hero-title", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
