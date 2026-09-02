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

// Phase 2: Fade the text out
tl.to(counterContainer, {
  scale: 0.5,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: Multi-Layer Iris Reveal
// Stagger closing the irises. Layer 1 closes first revealing Layer 2, etc.
tl.to([".layer-1", ".layer-2", ".layer-3"], {
  clipPath: "circle(0% at 50% 50%)",
  duration: 1.5,
  ease: "power4.inOut",
  stagger: 0.2 // Stagger the animation across the 3 layers
}, "-=0.1");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 1.2,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=1.2");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.8");
