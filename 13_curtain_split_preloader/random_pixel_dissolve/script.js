// 1. Generate 225 pixels
const pixelContainer = document.querySelector(".pixel-container");
for (let i = 0; i < 225; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  
  // Optional: randomize background slightly for texture
  if (Math.random() > 0.8) {
    pixel.style.background = "#1f2937";
  }
  
  pixelContainer.appendChild(pixel);
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
  duration: 2.5,
  ease: "power1.inOut",
  onUpdate: () => {
    // Pad to 3 digits for a digital look
    counterText.innerText = Math.floor(proxy.val).toString().padStart(3, "0");
  }
});

// Phase 2: Fade counter
tl.to(counterContainer, {
  scale: 1.5,
  opacity: 0,
  duration: 0.3,
  ease: "power2.in"
});

// Phase 3: The Random Pixel Dissolve
tl.to(".pixel", {
  scale: 0.2,
  opacity: 0,
  rotation: 45, // Add a little spin to the disappearing pixels
  duration: 0.4,
  ease: "power1.inOut",
  stagger: {
    from: "random", // Explodes randomly across the screen
    amount: 1.5     // Total time the stagger will take
  }
}, "-=0.1");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 1.5,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
}, "-=1.2");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
