gsap.registerPlugin(ScrollTrigger);

const targets = document.querySelectorAll(".scramble-text");
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

targets.forEach((target) => {
  // 1. Store the final required string
  const originalText = target.innerText;
  
  // 2. Immediately scramble the text on page load so it looks encrypted
  let initialOutput = "";
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] === " ") initialOutput += " ";
    else initialOutput += chars[Math.floor(Math.random() * chars.length)];
  }
  target.innerText = initialOutput;

  // 3. Create the proxy object for GSAP to tween
  let proxy = { progress: 0 };
  
  // 4. Tween the progress based on ScrollTrigger
  gsap.to(proxy, {
    progress: 1,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "top 80%", // Starts decoding when element enters the bottom 20% of screen
      end: "top 40%",   // Fully decoded when it reaches the middle
      scrub: 0.5        // Small lag for smoothness
    },
    onUpdate: () => {
      let output = "";
      
      for (let i = 0; i < originalText.length; i++) {
        // Resolve left-to-right based on progress
        if (i < originalText.length * proxy.progress) {
          output += originalText[i];
        } else {
          // Unresolved characters remain random
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
