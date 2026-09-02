const textEl = document.querySelector(".typewriter-text");
const btn = document.querySelector(".replay-btn");

const originalText = "ESTABLISHING SECURE CONNECTION...\nBYPASSING FIREWALL PROTOCOLS...\nACCESS GRANTED TO MAINFRAME.";
const chars = "!@#$%^&*()_+<>[]{}";

let proxy = { progress: 0 };
let currentTween = null;

function playAnimation() {
  if (currentTween) currentTween.kill();
  
  proxy.progress = 0;
  textEl.innerText = "";
  
  currentTween = gsap.to(proxy, {
    progress: 1,
    duration: 5,
    ease: "none", // Linear typing speed
    onUpdate: () => {
      // Calculate how many characters should be typed out right now
      let currentLen = Math.floor(originalText.length * proxy.progress);
      let output = "";
      
      for (let i = 0; i < currentLen; i++) {
        // If the character is one of the last 3 currently being typed out, scramble it!
        // This makes it look like it's "calculating" the next letter.
        if (i > currentLen - 4 && originalText[i] !== " " && originalText[i] !== "\n") {
          output += chars[Math.floor(Math.random() * chars.length)];
        } 
        // Otherwise, it has locked in
        else {
          output += originalText[i];
        }
      }
      
      // Add a blinking cursor at the end
      textEl.innerText = output + "█";
    },
    onComplete: () => {
      // Remove cursor on complete
      textEl.innerText = originalText;
    }
  });
}

// Play on load
playAnimation();

// Play on click
btn.addEventListener("click", playAnimation);
