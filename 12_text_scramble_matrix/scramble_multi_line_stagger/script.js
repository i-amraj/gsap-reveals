gsap.registerPlugin(ScrollTrigger);

// 1. Split the paragraph into LINES
const text = new SplitType('.stagger-paragraph', { types: 'lines' });
const chars = "!<>-_\\/[]{}—=+*^?#0123456789";

// 2. Prepare the data array
const lineData = [];

text.lines.forEach((lineElement) => {
  const originalText = lineElement.innerText;
  
  // Immediately scramble it so it looks encrypted on page load
  let initialOutput = "";
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] === " ") initialOutput += " ";
    else initialOutput += chars[Math.floor(Math.random() * chars.length)];
  }
  lineElement.innerText = initialOutput;
  
  lineData.push({
    element: lineElement,
    originalText: originalText,
    proxy: { progress: 0 } // A unique proxy for EACH line
  });
});

// Extract just the proxies into an array so GSAP can stagger them natively
const proxies = lineData.map(data => data.proxy);

// 3. Staggered Decoding Animation on Scroll
gsap.to(proxies, {
  progress: 1,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3, // The waterfall delay between lines!
  scrollTrigger: {
    trigger: ".stagger-paragraph",
    start: "top 80%", 
    toggleActions: "play none none none" 
  },
  onUpdate: function() {
    // 'this' refers to the specific tween that is updating
    // We need to find which proxy is currently updating to apply it to the DOM
    lineData.forEach((data) => {
      // Only process DOM updates if the proxy is actually moving (performance optimization)
      if (data.proxy.progress > 0 && data.proxy.progress < 1) {
        let output = "";
        
        for (let i = 0; i < data.originalText.length; i++) {
          if (i < data.originalText.length * data.proxy.progress) {
            output += data.originalText[i];
          } else {
            if (data.originalText[i] === " ") {
              output += " ";
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
        
        data.element.innerText = output;
      }
      // Ensure perfect resolve at the very end of this proxy's tween
      else if (data.proxy.progress === 1 && !data.element.classList.contains("decoded")) {
        data.element.innerText = data.originalText;
        data.element.classList.add("decoded");
      }
    });
  }
});
