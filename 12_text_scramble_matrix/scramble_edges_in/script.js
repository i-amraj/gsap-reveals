const targets = document.querySelectorAll(".edges-scramble");
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
          
          // As progress goes 0 -> 1, (1 - progress) goes 1 -> 0
          // If the distance is GREATER than this shrinking gap, resolve it!
          // This means outer edges resolve first, moving inward.
          if (dist > centerIndex * (1 - proxy.progress)) {
            output += originalText[i];
          } 
          // Otherwise, it's inside the shrinking gap, so scramble it.
          else {
            if (originalText[i] === " " || originalText[i] === "_") {
              output += originalText[i]; 
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
