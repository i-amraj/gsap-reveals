const container = document.querySelector(".cursor-image-container");
const img = document.querySelector(".cursor-img");
const hoverTexts = document.querySelectorAll(".hover-text");

// Highly performant following using quickTo
const xTo = gsap.quickTo(container, "left", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(container, "top", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

hoverTexts.forEach(text => {
  text.addEventListener("mouseenter", (e) => {
    img.src = e.target.getAttribute("data-image");
    gsap.to(container, {
      opacity: 1,
      scale: 1,
      rotation: (Math.random() - 0.5) * 10, // Slight random rotation
      duration: 0.4,
      ease: "power2.out"
    });
  });
  
  text.addEventListener("mouseleave", () => {
    gsap.to(container, {
      opacity: 0,
      scale: 0.5,
      rotation: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  });
});
