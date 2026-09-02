gsap.registerPlugin(ScrollTrigger);

const star = document.getElementById("star");
// We can use polygon, path, rect, etc. getTotalLength works on paths usually, but modern browsers support it on polygons.
// If it fails on some browsers for polygon, best practice is to convert polygon to path.
// For this demo, let's use a huge number if length fails.
let length;
try {
  length = star.getTotalLength();
} catch(e) {
  length = 1500; // Fallback estimate
}

gsap.set(star, {
  strokeDasharray: length,
  strokeDashoffset: length
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1500" // Requires 1500px of scrolling to complete
  }
});

tl.to(star, { strokeDashoffset: 0, ease: "none", duration: 1 })
  .to("h2", { opacity: 1, text: "DRAWN", duration: 0.2 }, "-=0.2"); // Reveal text at the end
