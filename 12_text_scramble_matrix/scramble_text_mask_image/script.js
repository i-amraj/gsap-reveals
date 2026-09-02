const targets = document.querySelectorAll(".scramble-mask-text");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  const originalText = target.innerText;
  
  target.addEventListener("mouseenter", () => {
    let proxy = { progress: 0 };
    
    gsap.killTweensOf(target);
    
    gsap.to(proxy, {
      progress: 1,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        let output = "";
        
        for (let i = 0; i < originalText.length; i++) {
          if (i < originalText.length * proxy.progress) {
            output += originalText[i];
          } else {
            if (originalText[i] === " ") {
              output += " ";
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
