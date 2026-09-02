// 1. Split text into words
const text = new SplitType('.glitch-paragraph', { types: 'words' });
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

// Store original text for all words
const wordData = text.words.map(el => ({
  element: el,
  originalText: el.innerText
}));

// 2. Function to trigger a fast scramble on a specific word
function glitchWord(dataObj) {
  let proxy = { progress: 0 };
  
  gsap.to(proxy, {
    progress: 1,
    duration: 0.6,
    ease: "power2.inOut",
    onStart: () => dataObj.element.classList.add("is-glitching"),
    onUpdate: () => {
      let output = "";
      for (let i = 0; i < dataObj.originalText.length; i++) {
        // We want it to scramble entirely in the middle, then resolve.
        // A simple way is: if progress is near 1, show original.
        if (proxy.progress > 0.8) {
          output += dataObj.originalText[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      dataObj.element.innerText = output;
    },
    onComplete: () => {
      dataObj.element.classList.remove("is-glitching");
      dataObj.element.innerText = dataObj.originalText; // Ensure perfect reset
    }
  });
}

// 3. Fire a glitch randomly every 800ms
setInterval(() => {
  // Pick random word
  const randomIndex = Math.floor(Math.random() * wordData.length);
  const randomData = wordData[randomIndex];
  
  glitchWord(randomData);
}, 800);

// We can fire a second interval for extra chaos!
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * wordData.length);
  const randomData = wordData[randomIndex];
  glitchWord(randomData);
}, 1300);
