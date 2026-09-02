gsap.registerPlugin(ScrollTrigger);

// Core native implementation logic that replaces GSAP's DrawSVGPlugin
function drawNativeSVG(selector) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(el => {
    const length = el.getTotalLength();
    // Initialize
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
    
    // Animate
    gsap.to(el, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

drawNativeSVG("#geo-path");
