// Transition 05: Split-Column Alternating Curtain Shift with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const strips = document.querySelectorAll(".col-strip");
  const viewA = document.getElementById("viewA");
  const viewB = document.getElementById("viewB");
  const btnToB = document.getElementById("btnToB");
  const btnToA = document.getElementById("btnToA");

  let isLocked = false;

  function performColumnShift(fromView, toView) {
    if (isLocked) return;
    isLocked = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isLocked = false;
      }
    });

    // 1. Alternating columns enter
    strips.forEach((strip, i) => {
      const dir = strip.getAttribute("data-dir");
      const startY = dir === "down" ? -100 : 100;

      tl.fromTo(strip, 
        { yPercent: startY },
        { yPercent: 0, duration: 0.6, ease: "power3.inOut" },
        i * 0.06 // Stagger
      );
    });

    // 2. Swap views at complete column closure
    tl.add(() => {
      fromView.classList.add("is-hidden");
      toView.classList.remove("is-hidden");
      gsap.set(toView.children, { y: 25, opacity: 0 });
    });

    // 3. Alternating columns exit in opposite directions
    strips.forEach((strip, i) => {
      const dir = strip.getAttribute("data-dir");
      const exitY = dir === "down" ? 100 : -100;

      tl.to(strip, {
        yPercent: exitY,
        duration: 0.6,
        ease: "power3.inOut"
      }, "+=0.1" + (i * 0.05));
    });

    // 4. Stagger reveal new view
    tl.to(toView.children, {
      y: 0,
      opacity: 1,
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.3");
  }

  btnToB.addEventListener("click", () => performColumnShift(viewA, viewB));
  btnToA.addEventListener("click", () => performColumnShift(viewB, viewA));
});
