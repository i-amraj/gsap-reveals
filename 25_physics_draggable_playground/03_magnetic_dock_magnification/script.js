// Physics 03: macOS Magnetic Dock Magnification with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const dock = document.getElementById("dock");
  const items = document.querySelectorAll(".dock-item");

  const baseSize = 52;
  const maxScale = 1.7; // Peak magnification
  const influenceRadius = 160; // Pixel radius of Gaussian influence

  dock.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - itemCenterX);

      if (distance < influenceRadius) {
        // Cosine/Gaussian interpolation for ultra-smooth bell curve
        const norm = distance / influenceRadius;
        const scale = 1 + (maxScale - 1) * Math.cos(norm * (Math.PI / 2));

        gsap.to(item, {
          scale: scale,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        gsap.to(item, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    });
  });

  dock.addEventListener("mouseleave", () => {
    items.forEach((item) => {
      gsap.to(item, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto"
      });
    });
  });

  // Authentic macOS App Launch Jump Bounce on Click
  items.forEach((item) => {
    item.addEventListener("click", () => {
      gsap.timeline()
        .to(item, { y: -26, duration: 0.22, ease: "power2.out" })
        .to(item, { y: 0, duration: 0.35, ease: "bounce.out" })
        .to(item, { y: -14, duration: 0.18, ease: "power2.out" })
        .to(item, { y: 0, duration: 0.25, ease: "bounce.out" });
    });
  });
});
