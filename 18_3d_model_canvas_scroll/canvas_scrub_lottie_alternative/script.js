gsap.registerPlugin(ScrollTrigger);

// Initialize Lottie
const anim = lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg', // or 'canvas'
  loop: false,
  autoplay: false,
  // A public dummy lottie file URL
  path: 'https://lottie.host/8b51d8b7-65d1-447a-8f74-32551ec46b14/E5B6yFqYc1.json' 
});

anim.addEventListener('DOMLoaded', () => {
  // Create a proxy object to hold the current frame
  const playhead = { frame: 0 };
  
  gsap.to(playhead, {
    frame: anim.totalFrames - 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".lottie-section",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=2000"
    },
    onUpdate: () => {
      // Tell lottie to go to this specific frame
      anim.goToAndStop(playhead.frame, true);
    }
  });
});
