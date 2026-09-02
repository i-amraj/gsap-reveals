const targets = document.querySelectorAll(".blur-scramble");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  const originalText = target.innerText;
  
  target.addEventListener("mouseenter", () => {
    let proxy = { progress: 0 };
    gsap.killTweensOf(target);
    
    gsap.to(proxy, {
      progress: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        let output = "";
        
        for (let i = 0; i < originalText.length; i++) {
          if (i < originalText.length * proxy.progress) {
            output += originalText[i];
          } else {
            if (originalText[i] === " " || originalText[i] === "_") {
              output += originalText[i]; 
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
        target.innerText = output;
        
        // --- The Blur Glitch Magic ---
        // Math.sin(0) = 0. Math.sin(PI/2) = 1. Math.sin(PI) = 0.
        // This means at progress=0.5 (the middle of the animation), the sine wave peaks at 1.
        // We multiply by 15 to get a max blur of 15px.
        const blurAmount = Math.sin(proxy.progress * Math.PI) * 15;
        
        // Add a slight color shift at the peak of the blur for chromatic aberration feel
        const colorShift = Math.sin(proxy.progress * Math.PI) * 50;
        
        target.style.filter = `blur(${blurAmount}px)`;
        target.style.color = `rgb(${255 - colorShift}, 255, ${255 + colorShift})`;
      },
      onComplete: () => {
        // Hard reset to ensure perfect sharpness at the end
        target.style.filter = "blur(0px)";
        target.style.color = "#f8fafc";
      }
    });
  });
});
