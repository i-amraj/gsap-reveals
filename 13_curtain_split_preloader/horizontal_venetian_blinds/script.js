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
  ease: "power3.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Fade the text out
tl.to(counterContainer, {
  scale: 0.8,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: Opposing Row Sliding Reveal
const rows = document.querySelectorAll(".row");
rows.forEach((row, i) => {
  // Evens go right (100%), Odds go left (-100%)
  const dir = (i % 2 === 0) ? 100 : -100;
  
  tl.to(row, {
    xPercent: dir,
    duration: 1.5,
    ease: "power4.inOut"
  }, "reveal"); // All start at the "reveal" label simultaneously
});

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=1");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.8");
