// 1. Generate 100 blocks
const gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < 100; i++) {
  const block = document.createElement("div");
  block.classList.add("grid-block");
  
  // Make it an actual visual checkerboard by coloring alternating blocks differently
  // Math for 10x10 grid alternating colors:
  const row = Math.floor(i / 10);
  const col = i % 10;
  if ((row + col) % 2 === 0) {
    block.style.background = "#dc2626"; // slightly darker red
  }
  
  gridContainer.appendChild(block);
}

// 2. Setup Animation
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

// Phase 2: Counter exits
tl.to(counterContainer, {
  y: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power3.in"
});

// Phase 3: The Staggered Checkerboard Reveal
tl.to(".grid-block", {
  scale: 0,
  rotation: 90,
  borderRadius: "50%",
  duration: 0.8,
  ease: "power2.inOut",
  stagger: {
    grid: [10, 10],
    from: "edges", // Start from the outside edges and move inward
    amount: 1.5
  }
}, "-=0.2");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=1");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.8");
