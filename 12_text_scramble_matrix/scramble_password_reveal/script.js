const textEl = document.querySelector(".password-text");
const btn = document.querySelector(".toggle-btn");

const realPassword = "OMEGA_DIRECTIVE_99X";
const hiddenPassword = "•••••••••••••••••••";
const chars = "!@#$%^&*()_+<>[]{}";

let isRevealed = false;
let proxy = { progress: 0 };
let currentTween = null;

btn.addEventListener("click", () => {
  // Toggle state
  isRevealed = !isRevealed;
  btn.innerText = isRevealed ? "HIDE" : "REVEAL";
  
  if (currentTween) currentTween.kill();
  
  // Set target arrays based on direction
  const targetText = isRevealed ? realPassword : hiddenPassword;
  
  currentTween = gsap.to(proxy, {
    progress: 1,
    duration: 1,
    ease: "power2.inOut",
    onStart: () => {
      // Reset progress to 0 for the new tween direction
      proxy.progress = 0;
    },
    onUpdate: () => {
      let output = "";
      for (let i = 0; i < targetText.length; i++) {
        // Resolve left-to-right
        if (i < targetText.length * proxy.progress) {
          output += targetText[i];
        } else {
          // If resolving to real text, scramble the dots before they turn into real text.
          // If hiding, scramble the real text before it turns into dots.
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      textEl.innerText = output;
    }
  });
});
