gsap.registerPlugin(ScrollTrigger);

// Since DrawSVG is Club GreenSock, we simulate it using standard CSS stroke-dasharray techniques via JS
const paths = document.querySelectorAll(".draw-path");

paths.forEach(path => {
  // SVG DOM method to get exact length of path/rect/circle
  const length = path.getTotalLength();
  
  // Set initial state: dash array equals length, offset pushes dash out of view
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length
  });
});

// Stagger draw them in on scroll
gsap.to(".draw-path", {
  scrollTrigger: {
    trigger: ".blueprint-hero",
    start: "top 60%",
    end: "bottom 80%",
    scrub: 1
  },
  strokeDashoffset: 0,
  stagger: 0.2, // Draws lines one after another
  ease: "power2.inOut"
});
