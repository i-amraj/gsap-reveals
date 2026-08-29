const card = document.querySelector(".ink-card");
const maskContainer = document.querySelector(".ink-mask-container");

// Update CSS variables for mouse position
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  maskContainer.style.setProperty('--mouseX', `${x}%`);
  maskContainer.style.setProperty('--mouseY', `${y}%`);
});

// Expand the blob on hover to reveal the second layer
card.addEventListener("mouseenter", () => {
  gsap.to(maskContainer, {
    "--blob-size": "150%", // Large enough to cover the whole card
    duration: 1.2,
    ease: "power3.inOut"
  });
});

// Shrink the blob back on leave
card.addEventListener("mouseleave", () => {
  gsap.to(maskContainer, {
    "--blob-size": "0%",
    duration: 0.8,
    ease: "power2.out"
  });
});
