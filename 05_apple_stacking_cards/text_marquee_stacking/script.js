gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");
const marquees = gsap.utils.toArray(".marquee");

// Setup Marquee infinite loops
const marqueeTimelines = [];
marquees.forEach(marquee => {
  const isReverse = marquee.classList.contains("marquee-reverse");
  
  const tl = gsap.to(marquee, {
    xPercent: isReverse ? 50 : -50, // Move left or right
    duration: 10,
    ease: "none",
    repeat: -1
  });
  
  marqueeTimelines.push(tl);
});

// Setup Stacking
containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      filter: "brightness(0.3)",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});

// Speed up marquees on global scroll velocity
let timeScaleTween;
ScrollTrigger.create({
  trigger: document.body,
  start: 0,
  end: "max",
  onUpdate: (self) => {
    // self.getVelocity() returns scroll velocity
    // Base speed is 1. We add velocity mapped to a reasonable range.
    const velocity = Math.abs(self.getVelocity());
    let targetTimeScale = 1 + (velocity / 200); 
    
    if (targetTimeScale > 10) targetTimeScale = 10; // Cap max speed
    
    if (timeScaleTween) timeScaleTween.kill();
    
    // Smoothly animate timescales up and back down
    marqueeTimelines.forEach(tl => {
      tl.timeScale(targetTimeScale);
    });
    
    // Auto-return to normal speed after scrolling stops
    timeScaleTween = gsap.to(marqueeTimelines, {
      timeScale: 1,
      duration: 1,
      ease: "power2.out",
      overwrite: true,
      delay: 0.1
    });
  }
});
