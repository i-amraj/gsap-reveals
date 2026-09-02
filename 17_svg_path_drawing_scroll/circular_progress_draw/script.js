gsap.registerPlugin(ScrollTrigger);

const circle = document.getElementById("progress-circle");
const text = document.getElementById("progress-text");
// Math: 2 * pi * r = 2 * 3.14159 * 45 = ~282.74
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

gsap.set(circle, {
  strokeDasharray: circumference,
  strokeDashoffset: circumference
});

gsap.to(circle, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
      text.innerText = Math.round(self.progress * 100) + "%";
    }
  }
});
