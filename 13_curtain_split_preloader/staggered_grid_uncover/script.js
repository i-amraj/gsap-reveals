// 1. Generate the grid blocks dynamically
const gridContainer = document.querySelector(".grid-container");
const rows = 6;
const cols = 6;
const totalBlocks = rows * cols; // 36

for (let i = 0; i < totalBlocks; i++) {
  const block = document.createElement("div");
  block.classList.add("grid-block");
  gridContainer.appendChild(block);
}

// 2. Setup Counter
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
  ease: "power1.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Pop out the counter UI
tl.to(counterContainer, {
  scale: 0.5,
  opacity: 0,
  duration: 0.4,
  ease: "back.in(1.7)"
});

// Phase 3: The Staggered Grid Reveal
// We scale them down, rotate them slightly, and fade them out, exploding from the center.
tl.to(".grid-block", {
  scale: 0,
  rotation: 15,
  opacity: 0,
  duration: 0.8,
  ease: "power3.inOut",
  stagger: {
    grid: [rows, cols], // Tells GSAP the physical layout
    from: "center",     // Explode outwards from the middle
    amount: 1.5         // Total time distributed across the stagger
  }
}, "-=0.2");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=1.2");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.8");
