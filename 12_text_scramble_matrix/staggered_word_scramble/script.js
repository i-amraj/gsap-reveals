gsap.registerPlugin(ScrollTrigger);

// 1. Split the paragraph into words
const text = new SplitType('.scramble-paragraph', { types: 'words' });
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

// 2. Prepare the data array
const wordData = [];

text.words.forEach((wordElement) => {
  // Store the exact original word
  const originalText = wordElement.innerText;
  
  // Immediately scramble it so it looks encrypted on page load
  let initialOutput = "";
  for (let i = 0; i < originalText.length; i++) {
    initialOutput += chars[Math.floor(Math.random() * chars.length)];
  }
  wordElement.innerText = initialOutput;
  
  // Store all required data for the GSAP tween
  wordData.push({
    element: wordElement,
    originalText: originalText,
    proxy: { progress: 0 }
  });
});

// 3. Staggered Decoding Animation on Scroll
wordData.forEach((data, index) => {
  gsap.to(data.proxy, {
    progress: 1,
    duration: 0.8,
    ease: "power2.out",
    delay: index * 0.05, // The stagger offset!
    scrollTrigger: {
      trigger: ".scramble-paragraph",
      start: "top 80%", // Starts when paragraph enters view
      toggleActions: "play none none none" // Play once
    },
    onUpdate: () => {
      let output = "";
      
      for (let i = 0; i < data.originalText.length; i++) {
        // Resolve left-to-right
        if (i < data.originalText.length * data.proxy.progress) {
          output += data.originalText[i];
        } else {
          // Keep showing random characters
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      data.element.innerText = output;
    },
    onComplete: () => {
      // Add a class to transition the color from green back to white
      data.element.classList.add("decoded");
    }
  });
});
