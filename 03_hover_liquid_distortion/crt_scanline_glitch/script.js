const card = document.querySelector(".crt-card");
const dispMap = document.querySelector("#glitchDispMap");
let glitchInterval;

card.addEventListener("mouseenter", () => {
  // Random rapid glitch intervals
  glitchInterval = setInterval(() => {
    // Spike the displacement scale randomly to create a signal glitch
    const glitchAmount = Math.random() * 80 + 20; 
    gsap.set(dispMap, { attr: { scale: glitchAmount } });
    
    // Reset it instantly
    setTimeout(() => {
      gsap.set(dispMap, { attr: { scale: 0 } });
    }, 50);
  }, 300); // Glitch every 300ms
  
  // Initial enter glitch burst
  gsap.fromTo(dispMap, { attr: { scale: 100 } }, { attr: { scale: 0 }, duration: 0.2, ease: "power4.out" });
});

card.addEventListener("mouseleave", () => {
  clearInterval(glitchInterval);
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 0.3 });
});
