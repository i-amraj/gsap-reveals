// Initial GSAP setup to ensure transforms don't conflict with CSS translate
gsap.set(".ring", { xPercent: -50, yPercent: -50 });

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
  duration: 2,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Fade Text
tl.to(counterContainer, {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  ease: "back.in(1.7)"
});

// Phase 3: Ring Collapse
// We select them explicitly in order from outermost (ring-4) to innermost (ring-1) 
// or vice versa depending on the desired effect.
// Let's collapse innermost first, then outer follows.
tl.to([".ring-1", ".ring-2", ".ring-3", ".ring-4"], {
  scale: 0,
  duration: 1.2,
  ease: "power3.inOut",
  stagger: 0.15
}, "-=0.2");

// Phase 4: Hero Reveal
tl.from(".hero-title", {
  scale: 2,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
}, "-=1");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.5");
