const hero = document.querySelector(".parallax-hero");
const bg = document.querySelector(".layer-bg");
const text = document.querySelector(".layer-text");
const fg = document.querySelector(".layer-fg");

// QuickTo for high performance mouse parallax
const xBg = gsap.quickTo(bg, "x", { duration: 1, ease: "power3" });
const yBg = gsap.quickTo(bg, "y", { duration: 1, ease: "power3" });

const xText = gsap.quickTo(text, "x", { duration: 0.8, ease: "power3" });
const yText = gsap.quickTo(text, "y", { duration: 0.8, ease: "power3" });

const xFg = gsap.quickTo(fg, "x", { duration: 0.5, ease: "power3" });
const yFg = gsap.quickTo(fg, "y", { duration: 0.5, ease: "power3" });

hero.addEventListener("mousemove", (e) => {
  const xRatio = (e.clientX / window.innerWidth) - 0.5;
  const yRatio = (e.clientY / window.innerHeight) - 0.5;
  
  // Background moves opposite to mouse slightly
  xBg(xRatio * -30);
  yBg(yRatio * -30);
  
  // Text moves with mouse slightly
  xText(xRatio * 20);
  yText(yRatio * 20);
  
  // Foreground moves with mouse heavily
  xFg(xRatio * 80);
  yFg(yRatio * 80);
});
