// =========================================
// MAGNETIC BUTTON — Core Physics
// =========================================
// The concept: On mousemove inside a button's radius,
// calculate the offset from center and push the button
// towards the mouse by a fraction (strength) of that offset.
// On mouseleave, spring it back to 0,0.

const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});

// --- Magnetic Button Logic ---
const STRENGTH = 0.4; // How strongly the button follows (0 = none, 1 = full follow)

document.querySelectorAll(".mag-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    
    // Center of the button
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offset from button center to mouse position
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Move the button by a fraction of the offset
    gsap.to(btn, {
      x: deltaX * STRENGTH,
      y: deltaY * STRENGTH,
      duration: 0.4,
      ease: "power3.out"
    });

    // Expand cursor on hover
    cursor.classList.add("expanded");
  });

  btn.addEventListener("mouseleave", () => {
    // Spring button back to its natural position
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)" // Elastic spring back
    });

    // Shrink cursor
    cursor.classList.remove("expanded");
  });
});
