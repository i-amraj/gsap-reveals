// Path morphing for a fluid wipe transition
const path = document.querySelector(".overlay-path");

// Start: Flat top (M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z)
// Curve down: M 0 0 L 100 0 L 100 100 Q 50 150 0 100 Z
// Fill screen: M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z

document.getElementById("transition-btn").addEventListener("click", () => {
  const tl = gsap.timeline();
  
  // Animate to a curved shape reaching the bottom
  tl.to(path, {
    attr: { d: "M 0 0 L 100 0 L 100 100 Q 50 150 0 100 Z" },
    duration: 0.6,
    ease: "power4.in"
  })
  // Straighten it out to fill the screen entirely
  .to(path, {
    attr: { d: "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z" },
    duration: 0.2,
    ease: "power2.out",
    onComplete: () => {
      // Here you would typically use Barba.js or window.location to load the next page
      alert("Next page loaded! Transition complete.");
      
      // Animate it back up (curve up then flat top)
      gsap.to(path, { attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 -50 0 0 Z" }, duration: 0.6, delay: 1, ease: "power4.inOut" });
      gsap.to(path, { attr: { d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" }, duration: 0.2, delay: 1.6, ease: "power2.out" });
    }
  });
});
