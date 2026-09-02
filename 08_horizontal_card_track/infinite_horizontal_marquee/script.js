gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById('marquee-track');

// Create the infinite playing tween
// Moving -50% shifts it exactly by the width of one set of cards (since it's duplicated)
const marqueeTween = gsap.to(track, {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1 // Loop infinitely
});

let proxy = { timeScale: 1 };
let timeScaleSetter = gsap.quickSetter(marqueeTween, "timeScale");
let clamp = gsap.utils.clamp(-15, 15);

// Use ScrollTrigger just to monitor scroll velocity and speed up the tween
ScrollTrigger.create({
  trigger: document.body,
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    // Get scroll velocity and scale it down.
    // If scrolling up (negative), we reverse the timeScale
    let velocity = self.getVelocity() / 300;
    
    // Add the velocity to the base timeScale of 1
    // if velocity is positive (scrolling down), it goes faster forward (e.g., 1 + 5 = 6x speed)
    // if velocity is negative (scrolling up), it goes backwards (e.g., 1 + (-5) = -4x speed)
    let newTimeScale = clamp(1 + velocity);
    
    gsap.to(proxy, {
      timeScale: newTimeScale,
      duration: 0.2,
      ease: "power2",
      overwrite: true,
      onUpdate: () => timeScaleSetter(proxy.timeScale)
    });
  }
});

// A separate interval to slowly bring the timeScale back to 1 when scrolling stops completely
// since ScrollTrigger onUpdate might not fire a perfect 0 at the end.
setInterval(() => {
  if (Math.abs(proxy.timeScale - 1) > 0.05) {
    gsap.to(proxy, {
      timeScale: 1,
      duration: 0.5,
      ease: "power2",
      overwrite: true,
      onUpdate: () => timeScaleSetter(proxy.timeScale)
    });
  }
}, 500);
