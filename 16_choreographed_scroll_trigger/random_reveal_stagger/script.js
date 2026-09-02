gsap.registerPlugin(ScrollTrigger);

const grid = document.getElementById("grid");

// Generate 25 boxes
for(let i=0; i<25; i++) {
  const box = document.createElement("div");
  box.className = "box";
  grid.appendChild(box);
}

gsap.to(".box", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  ease: "back.out(2)",
  stagger: {
    amount: 1.5,
    from: "random" // Advanced stagger setting for random order
  },
  scrollTrigger: {
    trigger: ".random-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
