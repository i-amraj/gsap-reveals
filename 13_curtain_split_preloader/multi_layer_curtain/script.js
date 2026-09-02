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
  duration: 2,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Fade the text out
tl.to(counterText, {
  opacity: 0,
  y: -50,
  duration: 0.5,
  ease: "power2.in"
});

// Phase 3: The Multi-Layer Wipe
// We select all layers and stagger their upward movement.
// The DOM order dictates they will stagger layer-3, layer-2, layer-1,
// so we need to reverse the selection or specify the classes explicitly.
tl.to([".layer-1", ".layer-2", ".layer-3"], {
  yPercent: -100,
  duration: 1.2,
  ease: "power4.inOut",
  stagger: 0.15 // 150ms delay between each layer wiping up
}, "-=0.1");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.8"); // Start while the last layer is still moving

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.6");
