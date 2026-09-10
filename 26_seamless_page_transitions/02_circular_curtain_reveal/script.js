// Transition 02: Coordinate Circular Mask Curtain Reveal with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".transition-trigger");
  const view2 = document.getElementById("view2");

  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = btn.getAttribute("data-target");
      const clickX = e.clientX;
      const clickY = e.clientY;

      if (target === "view2") {
        // Expand circle from click origin
        view2.classList.add("active");

        gsap.fromTo(view2, 
          { clipPath: `circle(0% at ${clickX}px ${clickY}px)` },
          {
            clipPath: `circle(150% at ${clickX}px ${clickY}px)`,
            duration: 0.85,
            ease: "power3.inOut"
          }
        );

        // Stagger inner content reveal
        gsap.fromTo(view2.querySelector(".view-content").children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.35, stagger: 0.1, ease: "power2.out" }
        );
      } else {
        // Reverse back to view1 from back button position
        gsap.to(view2, {
          clipPath: `circle(0% at ${clickX}px ${clickY}px)`,
          duration: 0.75,
          ease: "power3.inOut",
          onComplete: () => {
            view2.classList.remove("active");
          }
        });
      }
    });
  });
});
