const cursor = document.getElementById("cursor");
const label = document.getElementById("cursor-label");
const xTo = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "power3" });
const yTo = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "power3" });

window.addEventListener("mousemove", e => { xTo(e.clientX); yTo(e.clientY); });

document.querySelectorAll("[data-cursor]").forEach(el => {
  el.addEventListener("mouseenter", () => {
    label.innerText = el.dataset.cursor;
    cursor.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});
