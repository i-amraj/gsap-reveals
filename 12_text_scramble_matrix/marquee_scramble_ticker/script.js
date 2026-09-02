// 1. Setup the infinite marquee movement
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1
});

// 2. Setup the text scrambling logic
const phrases = [
  "SCROLLING INFINITELY ",
  "CONTINUOUS DATA FLOW ",
  "NEVER STOP MOVING!!! "
];

const contents = document.querySelectorAll(".marquee-content");
let currentIndex = 0;
const chars = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scrambleMorph() {
  const currentText = phrases[currentIndex];
  currentIndex = (currentIndex + 1) % phrases.length;
  const nextText = phrases[currentIndex];
  
  const maxLength = Math.max(currentText.length, nextText.length);
  
  // We use a single proxy to drive the update for all marquee blocks simultaneously
  let proxy = { progress: 0 };
  
  gsap.to(proxy, {
    progress: 1,
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: () => {
      let output = "";
      
      for (let i = 0; i < maxLength; i++) {
        const charProgress = proxy.progress * (maxLength + 4) - i;
        
        if (charProgress > 1) {
          output += nextText[i] || "";
        } else if (charProgress > 0) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += currentText[i] || "";
        }
      }
      
      // Update all identical blocks in the marquee to maintain the seamless loop
      contents.forEach(el => {
        // Append the bullet point to visually separate repetitions
        el.innerText = output + " • ";
      });
    }
  });
}

// Trigger the morph every 4 seconds
setInterval(scrambleMorph, 4000);
