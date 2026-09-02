const phrases = [
  "CREATIVE DEVELOPER",
  "INTERACTIVE DESIGNER",
  "MOTION ENGINEER",
  "DIGITAL ARTIST"
];

const textEl = document.querySelector(".morph-text");
let currentIndex = 0;
const chars = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function morphToNext() {
  const currentText = phrases[currentIndex];
  // Calculate next index
  currentIndex = (currentIndex + 1) % phrases.length;
  const nextText = phrases[currentIndex];
  
  // We need to loop up to the longest string to pad missing characters
  const maxLength = Math.max(currentText.length, nextText.length);
  
  let proxy = { progress: 0 };
  
  gsap.to(proxy, {
    progress: 1,
    duration: 1.5,
    delay: 2.5, // Dwell time on each phrase before morphing
    ease: "power2.inOut",
    onUpdate: () => {
      let output = "";
      
      for (let i = 0; i < maxLength; i++) {
        // Calculate a sweeping wave progress for each individual character
        // The first character starts scrambling immediately, the last character starts later
        const charProgress = proxy.progress * (maxLength + 4) - i;
        
        // 1. Fully resolved to new character
        if (charProgress > 1) {
          output += nextText[i] || ""; // Handle undefined if new string is shorter
        } 
        // 2. Currently scrambling
        else if (charProgress > 0) {
          // If both strings have a space here, don't scramble the space
          if (nextText[i] === " " && currentText[i] === " ") {
            output += " ";
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        } 
        // 3. Not yet scrambled, show old character
        else {
          output += currentText[i] || ""; // Handle undefined if old string is shorter
        }
      }
      
      textEl.innerText = output;
    },
    onComplete: morphToNext // Recursive loop
  });
}

// Start the loop
morphToNext();
