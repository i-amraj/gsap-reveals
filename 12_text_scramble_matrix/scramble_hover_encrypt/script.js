const targets = document.querySelectorAll(".encrypt-text");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  const originalText = target.innerText;
  
  // Create a persistent proxy object for this specific element
  let proxy = { progress: 0 };
  
  // We use the same update function for both entering and leaving
  const updateText = () => {
    let output = "";
    
    for (let i = 0; i < originalText.length; i++) {
      // If we are BEFORE the progress threshold, we are ENCRYPTED
      if (i < originalText.length * proxy.progress) {
        if (originalText[i] === " ") {
          output += " ";
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      } 
      // If we are AFTER the progress threshold, we are READABLE
      else {
        output += originalText[i];
      }
    }
    
    target.innerText = output;
  };

  target.addEventListener("mouseenter", () => {
    gsap.killTweensOf(proxy);
    gsap.to(proxy, {
      progress: 1,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: updateText
    });
  });
  
  target.addEventListener("mouseleave", () => {
    gsap.killTweensOf(proxy);
    gsap.to(proxy, {
      progress: 0,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: updateText
    });
  });
});
