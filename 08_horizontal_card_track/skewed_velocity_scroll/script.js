gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.querySelector('.horizontal-section');
const cards = gsap.utils.toArray('.card');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

// 1. The main horizontal scroll tween
const tween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

// 2. A proxy object to smooth the velocity skewing
let proxy = { skew: 0 };
let skewSetter = gsap.quickSetter(cards, "skewX", "deg");
let clamp = gsap.utils.clamp(-20, 20); // Max skew is 20 degrees

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  onUpdate: (self) => {
    // Get velocity (pixels per second) and scale it down
    let velocity = clamp(self.getVelocity() / -100);
    
    // Animate the proxy object so it springs back smoothly to 0 when stopped
    gsap.to(proxy, {
      skew: velocity,
      duration: 0.3,
      ease: "power3",
      overwrite: true,
      onUpdate: () => {
        // Apply the proxy's current value to all cards quickly
        skewSetter(proxy.skew);
      }
    });
  }
});
