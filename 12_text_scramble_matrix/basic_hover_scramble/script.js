const targets = document.querySelectorAll(".scramble-text");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  // Store the original string
  const originalText = target.innerText;
  
  target.addEventListener("mouseenter", () => {
    // Create a proxy object to tween
    let proxy = { progress: 0 };
    
    // Kill any ongoing tweens on this object to prevent overlap glitching
    gsap.killTweensOf(target);
    
    gsap.to(proxy, {
      progress: 1,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        let output = "";
        
        // Loop through the original string length
        for (let i = 0; i < originalText.length; i++) {
          
          // If the character's relative position is behind the current progress, 
          // resolve it to the correct original character.
          if (i < originalText.length * proxy.progress) {
            output += originalText[i];
          } 
          // Otherwise, show a random character
          else {
            // Preserve spaces so the word lengths don't shift randomly
            if (originalText[i] === " ") {
              output += " ";
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
        
        // Update the DOM
        target.innerText = output;
      }
    });
  });
});
