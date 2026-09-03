const cards = document.querySelectorAll(".tv-card");

cards.forEach(card => {
  const glow = card.querySelector(".card-glow");
  
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    // Apply 3D rotation via GSAP for smoothness
    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.05,
      duration: 0.1,
      ease: "power1.out"
    });
    
    // Move glow to follow mouse
    gsap.to(glow, {
      x: x - centerX,
      y: y - centerY,
      opacity: 1,
      duration: 0.1
    });
  });
  
  card.addEventListener("mouseleave", () => {
    // Reset
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out"
    });
    
    gsap.to(glow, { opacity: 0, duration: 0.5 });
  });
});
