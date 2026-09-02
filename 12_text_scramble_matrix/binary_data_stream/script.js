const target = document.querySelector(".binary-text");
const btn = document.querySelector(".decode-btn");

const originalText = target.innerText;
const chars = "01"; // Binary pool

// 1. Create infinite idle scrambling state
let idleProxy = { t: 0 };
gsap.to(idleProxy, {
  t: 1,
  duration: 0.1, // Faster tick for intense data stream look
  repeat: -1,
  ease: "none",
  onUpdate: () => {
    let output = "";
    for (let i = 0; i < originalText.length; i++) {
      if (originalText[i] === " ") {
        output += " ";
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    target.innerText = output;
  }
});

// 2. Handle decryption click
btn.addEventListener("click", () => {
  // Disable button
  btn.innerText = "DECRYPTING...";
  btn.disabled = true;
  
  // Kill the idle tween so it stops fighting for control of the innerText
  gsap.killTweensOf(idleProxy);
  
  // Start the structured decode tween
  let decodeProxy = { progress: 0 };
  gsap.to(decodeProxy, {
    progress: 1,
    duration: 2, // 2 seconds to fully decode
    ease: "power2.out",
    onUpdate: () => {
      let output = "";
      for (let i = 0; i < originalText.length; i++) {
        // If index is below progress, show real character
        if (i < originalText.length * decodeProxy.progress) {
          output += originalText[i];
        } 
        // Else keep showing random binary
        else {
          if (originalText[i] === " ") {
            output += " ";
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      target.innerText = output;
    },
    onComplete: () => {
      btn.innerText = "AUTHORIZED";
      target.style.color = "#10b981"; // Turn green on success
      target.style.textShadow = "0 0 10px rgba(16, 185, 129, 0.5)";
    }
  });
});
