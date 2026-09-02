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

// Phase 2: Pop text out
tl.to(counterText, {
  scale: 1.5,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: The Elastic SVG Wipe
// Step A: The curve stretches downwards heavily (tension)
tl.to("#curve", {
  attr: { d: "M 0 100 V 50 Q 50 150 100 50 V 100 Z" },
  duration: 0.6,
  ease: "power2.in"
});

// Step B: The curve snaps up and offscreen
tl.to("#curve", {
  attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 Z" },
  duration: 0.8,
  ease: "power2.out"
});

// Phase 4: Hero Reveal
tl.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.6"); // Overlaps with the snap

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.4");
