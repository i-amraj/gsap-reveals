const btn = document.querySelector(".gooey-btn");
const container = document.querySelector(".bubbles-container");

btn.addEventListener("mouseenter", () => {
  // Create bubbles
  for(let i=0; i<4; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    container.appendChild(bubble);
    
    // Animate bubble outwards
    gsap.to(bubble, {
      x: (Math.random() - 0.5) * 100,
      y: -50 - Math.random() * 50,
      scale: Math.random() * 1.5 + 0.5,
      duration: 1 + Math.random(),
      ease: "power2.out",
      onComplete: () => bubble.remove() // Cleanup
    });
  }
});
