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

// Phase 2: Fade the text
tl.to(counterText, {
  opacity: 0,
  y: -20,
  duration: 0.5,
  ease: "power2.inOut"
});

// Phase 3: The Staggered Columns Reveal
tl.to(".column", {
  yPercent: -100,
  duration: 1.2,
  ease: "power4.inOut",
  stagger: 0.1 // This creates the sequential ripple effect
}, "-=0.2");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1.2");
