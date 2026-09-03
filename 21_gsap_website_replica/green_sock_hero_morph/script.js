// Simulate a logo intro animation similar to GSAP's homepage
const tl = gsap.timeline({ delay: 0.5 });

// 1. Drop the logo in
tl.from(".logo-container", {
  y: -150,
  opacity: 0,
  rotation: -90,
  duration: 1,
  ease: "bounce.out"
})
// 2. Animate the SVG path (Simulating morphing by manipulating rx/ry via scale for a circle, or direct path data if nodes match)
// Since we don't have Club GreenSock MorphSVG here, we animate the path string directly (only works if same number of points).
// Square: "M 10,10 L 90,10 L 90,90 L 10,90 Z"
// Diamond: "M 50,10 L 90,50 L 50,90 L 10,50 Z"
.to("#shape1", {
  attr: { d: "M 50,10 L 90,50 L 50,90 L 10,50 Z" },
  duration: 1,
  ease: "elastic.out(1, 0.3)"
})
// 3. Stagger text
.from(".hero-text h1, .hero-text p, .cta-btn", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.5");

// Hover effect on CTA
const btn = document.querySelector(".cta-btn");
btn.addEventListener("mouseenter", () => gsap.to(btn, { scale: 1.1, backgroundColor: "#a2e604", duration: 0.3 }));
btn.addEventListener("mouseleave", () => gsap.to(btn, { scale: 1, backgroundColor: "#88ce02", duration: 0.3 }));
