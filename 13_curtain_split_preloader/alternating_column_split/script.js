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

// Phase 2: Counter text exits
tl.to(counterContainer, {
  scale: 1.5,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: Alternating Column Wave Reveal
const columns = document.querySelectorAll(".column");
columns.forEach((col, i) => {
  // Even index goes UP (-100%), Odd index goes DOWN (100%)
  const dir = (i % 2 === 0) ? -100 : 100;
  
  // Create a slight wave delay across the screen
  const delay = i * 0.08;
  
  tl.to(col, {
    yPercent: dir,
    duration: 1.5,
    ease: "power4.inOut"
  }, `reveal+=${delay}`); // All start relative to the "reveal" label
});

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 0.9,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "reveal+=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
