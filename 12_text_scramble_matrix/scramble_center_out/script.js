const targets = document.querySelectorAll(".center-scramble");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  const originalText = target.innerText;
  const centerIndex = originalText.length / 2;
  
  target.addEventListener("mouseenter", () => {
    let proxy = { progress: 0 };
    gsap.killTweensOf(target);
    
    gsap.to(proxy, {
      progress: 1,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        let output = "";
        
        for (let i = 0; i < originalText.length; i++) {
          // Calculate distance from the absolute center
          const dist = Math.abs(i - centerIndex);
          
          // If the distance is less than our expanding radius (progress), resolve it!
          if (dist < centerIndex * proxy.progress) {
            output += originalText[i];
          } 
          // Otherwise, it's outside the radius, so scramble it.
          else {
            if (originalText[i] === " " || originalText[i] === "_") {
              output += originalText[i]; // Preserve spacing/formatting
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
        
        target.innerText = output;
      }
    });
  });
});
