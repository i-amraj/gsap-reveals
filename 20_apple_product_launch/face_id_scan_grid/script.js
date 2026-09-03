gsap.registerPlugin(ScrollTrigger);

const grid = document.getElementById("dotGrid");

// Create 400 dots (20x20)
for (let i = 0; i < 400; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  grid.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".face-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Randomize Z position and opacity to simulate the TrueDepth IR scan mapping a 3D face
tl.to(dots, {
  opacity: (i) => Math.random() > 0.4 ? 1 : 0.2, // Some bright, some dim
  translateZ: () => (Math.random() * 200) - 50, // Topographical map effect
  backgroundColor: (i) => Math.random() > 0.8 ? "#4ade80" : "#fff", // Occasional green dot for "success"
  duration: 2,
  stagger: {
    amount: 1,
    grid: [20, 20],
    from: "center" // Radiate from center
  },
  ease: "power2.out"
})
.to(".hero-text h1", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "back.out(1.5)"
}, "-=1");
