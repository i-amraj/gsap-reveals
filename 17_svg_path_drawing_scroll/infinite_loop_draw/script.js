gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("infinity");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

// A timeline that draws then erases the path infinitely
const tl = gsap.timeline({ repeat: -1, yoyo: true });
tl.to(path, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" });

// Only play the loop when the section is in view
ScrollTrigger.create({
  trigger: ".loop-section",
  start: "top bottom",
  end: "bottom top",
  onEnter: () => tl.play(),
  onLeave: () => tl.pause(),
  onEnterBack: () => tl.play(),
  onLeaveBack: () => tl.pause()
});
