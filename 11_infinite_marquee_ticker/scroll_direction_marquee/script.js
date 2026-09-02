gsap.registerPlugin(ScrollTrigger);

// Base infinite loop tween
let marqueeTween = gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

let currentDirection = 1;

// Use ScrollTrigger to monitor scroll direction
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    // self.direction is 1 for down, -1 for up
    if (self.direction !== currentDirection) {
      currentDirection = self.direction;
      
      // Animate the timeScale. 
      // 1 plays forward, -1 plays backward perfectly.
      gsap.to(marqueeTween, {
        timeScale: currentDirection,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
      });
    }
  }
});
