const counterText = document.querySelector(".counter-text");
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

// Phase 2: Fade out the counter text slightly before reveal
tl.to(counterText, {
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "power2.inOut"
});

// Phase 3: Expand the Hero Section Mask
tl.to(".hero-section", {
  clipPath: "circle(150% at 50% 50%)",
  duration: 1.5,
  ease: "power4.inOut"
}, "-=0.2");

// Phase 4: Staggered Content Reveal
tl.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.6");
