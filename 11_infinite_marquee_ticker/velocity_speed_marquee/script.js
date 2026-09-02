gsap.registerPlugin(ScrollTrigger);

// 1. Create the base infinite loop tween
let marqueeTween = gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// 2. Use ScrollTrigger to monitor scroll velocity anywhere on the page
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    // getVelocity returns positive/negative based on direction.
    // We only care about absolute speed here.
    // Divide by 200 to scale the number down to a reasonable multiplier (e.g., 2 to 5)
    let velocity = Math.abs(self.getVelocity() / 200);
    
    // Base timescale is 1. We add the velocity multiplier on top.
    let timeScale = 1 + velocity;
    
    // Clamp it so it doesn't get ridiculously fast and break
    if(timeScale > 8) timeScale = 8;
    
    // Smoothly animate the tween's timeScale up to match the scroll velocity
    gsap.to(marqueeTween, {
      timeScale: timeScale,
      duration: 0.2, // Quick reaction
      ease: "power1.out",
      overwrite: true // Prevent conflicting tweens on the timeScale
    });
    
    // Then, slowly return the timeScale back to 1 (normal speed) after they stop scrolling
    gsap.to(marqueeTween, {
      timeScale: 1,
      duration: 1.5, // Slow decay back to normal
      delay: 0.2, // Wait a tiny bit before decaying
      ease: "power2.out",
      overwrite: "auto"
    });
  }
});
