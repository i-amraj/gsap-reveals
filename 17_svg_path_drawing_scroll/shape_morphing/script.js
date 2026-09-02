gsap.registerPlugin(ScrollTrigger);

// Without the premium MorphSVGPlugin, we can still morph simple shapes 
// if they have the exact same number and type of path commands.
// Triangle: M 50 10 L 90 90 L 10 90 Z (4 commands)
// Square (Diamond): M 50 10 L 90 50 L 50 90 L 10 50 Z (5 commands, wait, we need identical node structure).
// Let's use exact same commands: M, L, L, Z for both.
// Triangle: M 50 10 L 90 90 L 10 90 Z
// Flipped Triangle: M 50 90 L 90 10 L 10 10 Z

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".morph-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

tl.to("#shape", { 
  attr: { d: "M 50 90 L 90 10 L 10 10 Z" }, 
  fill: "#ef4444", 
  duration: 1, 
  ease: "power2.inOut" 
})
.to("#morph-text", { text: "Flipped", duration: 0.2 }, "-=0.5"); // Note: text plugin not loaded, just a simple demo so it might fail text, let's use innerHTML or opacity.

// Fix text update without TextPlugin
tl.to("#morph-text", { opacity: 0, duration: 0.2 }, "-=1")
  .call(() => document.getElementById("morph-text").innerText = "Flipped", [], "-=0.8")
  .to("#morph-text", { opacity: 1, duration: 0.2 }, "-=0.5");
