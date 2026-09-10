// Bento Grid 05: Dynamic Squeeze Accordion Reveal with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".bento-panel");

  // Initialize theme colors
  panels.forEach((panel) => {
    const color = panel.getAttribute("data-color");
    panel.style.setProperty("--panel-color", color);
  });

  // GSAP initial load entrance
  gsap.from(panels, {
    scaleX: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

  // Dynamic panel expansion
  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (panel.classList.contains("active")) return;

      panels.forEach((p) => {
        p.classList.remove("active");
        gsap.to(p, {
          flexGrow: 1,
          duration: 0.55,
          ease: "power3.out"
        });

        const content = p.querySelector(".panel-content");
        gsap.to(content, {
          opacity: 0,
          duration: 0.2
        });
      });

      panel.classList.add("active");

      gsap.to(panel, {
        flexGrow: 3.5,
        duration: 0.65,
        ease: "power3.out"
      });

      const activeContent = panel.querySelector(".panel-content");
      const elements = activeContent.querySelectorAll(".badge-mini, h2, p, .feature-tags");

      gsap.fromTo(elements, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, delay: 0.15, ease: "power2.out" }
      );
    });
  });
});
