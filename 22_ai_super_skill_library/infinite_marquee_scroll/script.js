gsap.registerPlugin(ScrollTrigger);

// Setup an infinite loop tween moving the track left by half its width
// (Assuming the track contains 2 identical halves)
// Since we have 4 items, let's just move it -50% and repeat
const track = document.querySelector(".marquee-track");

const tl = gsap.to(track, {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1
});

// Adjust timescale based on scroll velocity
ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    // Determine scroll direction and velocity
    const velocity = Math.abs(self.getVelocity());
    let speed = 1;
    
    if(self.direction === 1) { // Scrolling down
      speed = 1 + (velocity / 100);
    } else { // Scrolling up
      speed = -1 - (velocity / 100);
    }
    
    // Animate the timeScale so it smoothly returns to normal
    gsap.to(tl, { timeScale: speed, duration: 0.2, overwrite: true });
    gsap.to(tl, { timeScale: self.direction === 1 ? 1 : -1, duration: 1, delay: 0.2, overwrite: false });
  }
});
