gsap.registerPlugin(ScrollTrigger);

const targets = document.querySelectorAll(".kanji-scramble");
// Half-width Katakana characters
const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";

targets.forEach((target) => {
  const originalText = target.innerText;
  
  // Immediately scramble to Katakana on page load
  let initialOutput = "";
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] === " ") initialOutput += " ";
    else initialOutput += chars[Math.floor(Math.random() * chars.length)];
  }
  target.innerText = initialOutput;

  let proxy = { progress: 0 };
  
  // Tween the progress based on ScrollTrigger
  gsap.to(proxy, {
    progress: 1,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "top 80%", 
      end: "top 30%",   
      scrub: 1 // Smooth scrub
    },
    onUpdate: () => {
      let output = "";
      
      for (let i = 0; i < originalText.length; i++) {
        if (i < originalText.length * proxy.progress) {
          // Resolved into English
          output += originalText[i];
        } else {
          // Unresolved remains Katakana
          if (originalText[i] === " ") {
            output += " ";
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      
      target.innerText = output;
      
      // Flash bright white when fully decoded
      if (proxy.progress > 0.99) {
        target.style.color = "#fff";
        target.style.textShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
      } else {
        target.style.color = "#10b981";
        target.style.textShadow = "0 0 15px rgba(16, 185, 129, 0.5)";
      }
    }
  });
});
