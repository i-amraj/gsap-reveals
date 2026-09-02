gsap.registerPlugin(ScrollTrigger);

const text = document.getElementById("svg-text");
// Since it's a <text> element, getTotalLength() isn't standard in all browsers for text directly.
// A common workaround is estimating or using a high dasharray, then setting to 0.
const estimatedLength = 1500;

gsap.set(text, {
  strokeDasharray: estimatedLength,
  strokeDashoffset: estimatedLength
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

tl.to(text, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" })
  .to(text, { fill: "#38bdf8", duration: 1 }, "-=0.5");
