gsap.registerPlugin(ScrollTrigger);

// Base infinite loop tween
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// Monitor scroll velocity to apply blur
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    // Get absolute scroll velocity and scale it down
    let velocity = Math.abs(self.getVelocity() / 100);
    
    // Clamp the blur so it doesn't become a grey block
    if (velocity > 15) velocity = 15;
    
    // Smoothly apply the CSS blur filter
    gsap.to(".marquee-track", {
      filter: `blur(${velocity}px)`,
      duration: 0.2,
      ease: "power1.out",
      overwrite: true
    });
    
    // Return to sharp text when the user stops scrolling
    gsap.to(".marquee-track", {
      filter: `blur(0px)`,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
  }
});
