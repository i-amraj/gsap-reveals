gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('elastic-section');
const cards = gsap.utils.toArray('.card');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

const trackTween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

// Proxy object to tween values smoothly before applying to DOM
let proxy = { scaleX: 1, skewX: 0 };
let scaleXSetter = gsap.quickSetter(cards, "scaleX");
let skewXSetter = gsap.quickSetter(cards, "skewX", "deg");

// Clamp values so it doesn't break the layout completely on hyper-fast scroll
let clampScale = gsap.utils.clamp(1, 1.8);
let clampSkew = gsap.utils.clamp(-15, 15);

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: trackTween,
  scrub: 1,
  invalidateOnRefresh: true,
  onUpdate: (self) => {
    // Get raw scroll velocity (px per second)
    let velocity = self.getVelocity();
    
    // Convert velocity to scale (stretches wider the faster you go)
    let targetScale = clampScale(1 + Math.abs(velocity) / 2000);
    
    // Convert velocity to skew (leans in the direction of scroll)
    let targetSkew = clampSkew(velocity / -150);
    
    // Animate the proxy object for smooth spring-back
    gsap.to(proxy, {
      scaleX: targetScale,
      skewX: targetSkew,
      duration: 0.3,
      ease: "power3.out",
      overwrite: true,
      onUpdate: () => {
        scaleXSetter(proxy.scaleX);
        skewXSetter(proxy.skewX);
      }
    });
  }
});

// Continuously pull proxy back to rest state when scrolling stops completely
setInterval(() => {
  if (Math.abs(proxy.scaleX - 1) > 0.01 || Math.abs(proxy.skewX) > 0.1) {
    gsap.to(proxy, {
      scaleX: 1,
      skewX: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
      overwrite: true,
      onUpdate: () => {
        scaleXSetter(proxy.scaleX);
        skewXSetter(proxy.skewX);
      }
    });
  }
}, 300);
