gsap.registerPlugin(ScrollTrigger);

let marqueeTween = gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    // getVelocity keeps the sign (- for up, + for down)
    let rawVelocity = self.getVelocity() / 200; 
    let speed = Math.abs(rawVelocity);
    
    // Calculate a skew based on velocity direction
    let skew = rawVelocity * 2; 
    // Clamp the skew so it doesn't become completely unreadable
    if (skew > 25) skew = 25;
    if (skew < -25) skew = -25;
    
    let timeScale = 1 + speed;
    if(timeScale > 8) timeScale = 8;
    
    // Smoothly apply timescale and skew
    gsap.to(marqueeTween, {
      timeScale: timeScale,
      duration: 0.2,
      ease: "power1.out",
      overwrite: true
    });
    
    gsap.to(".marquee-track", {
      skewX: skew,
      duration: 0.2,
      ease: "power1.out",
      overwrite: true
    });
    
    // Return to normal resting state (timeScale 1, skew 0)
    gsap.to(marqueeTween, {
      timeScale: 1,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
    
    gsap.to(".marquee-track", {
      skewX: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
});
