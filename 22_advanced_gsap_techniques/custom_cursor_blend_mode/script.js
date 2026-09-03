const cursor = document.querySelector(".custom-cursor");

// Use quickTo for zero-lag cursor tracking
const xTo = gsap.quickTo(cursor, "x", {duration: 0.1, ease: "power2.out"});
const yTo = gsap.quickTo(cursor, "y", {duration: 0.1, ease: "power2.out"});

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// Optionally, scale cursor on hover of text
const headings = document.querySelectorAll("h1");
headings.forEach(h => {
  // Since pointer-events is none on h1, we add a wrapping span or just detect mouse position
  // For simplicity here, we assume the user understands how to hook hover states to scale the cursor.
});
