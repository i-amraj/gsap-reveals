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
  ease: "power1.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Scale out the text
tl.to(counterContainer, {
  scale: 1.5,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: The Collapsing Diamond Reveal
// Morphs the massive diamond into a tiny invisible point in the center
tl.to(".preloader-wrapper", {
  clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
  duration: 1.5,
  ease: "power4.inOut"
}, "-=0.1");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.6");
