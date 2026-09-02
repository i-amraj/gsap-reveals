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
  ease: "power3.inOut",
  onUpdate: () => {
    // Add trailing zeros for a more stylized, digital look
    counterText.innerText = Math.floor(proxy.val).toString().padStart(3, "0");
  }
});

// Phase 2: Fade the text
tl.to(counterText, {
  opacity: 0,
  scale: 1.5,
  duration: 0.5,
  ease: "power2.in"
});

// Phase 3: The Diagonal Slice
// We move the top-left piece UP and LEFT
tl.to(".curtain-top-left", {
  xPercent: -100,
  yPercent: -100,
  duration: 1.5,
  ease: "power4.inOut"
}, "-=0.2");

// We move the bottom-right piece DOWN and RIGHT
tl.to(".curtain-bottom-right", {
  xPercent: 100,
  yPercent: 100,
  duration: 1.5,
  ease: "power4.inOut"
}, "<");

// Phase 4: Hero Reveal
tl.from(".hero-title", {
  scale: 1.2,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
