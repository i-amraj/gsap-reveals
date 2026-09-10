// Transition 03: Diagonal Skew Slab Curtain Wipe with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const slabs = document.querySelectorAll(".slab");
  const panelA = document.getElementById("panelA");
  const panelB = document.getElementById("panelB");
  const toPanelB = document.getElementById("toPanelB");
  const toPanelA = document.getElementById("toPanelA");

  let isAnimating = false;

  function switchPanels(fromPanel, toPanel) {
    if (isAnimating) return;
    isAnimating = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      }
    });

    // 1. Slabs enter from left
    tl.fromTo(slabs, 
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.inOut"
      }
    );

    // 2. Swap content at coverage midpoint
    tl.add(() => {
      fromPanel.classList.add("is-hidden");
      toPanel.classList.remove("is-hidden");

      gsap.set(toPanel.children, { y: 25, opacity: 0 });
    });

    // 3. Slabs exit to right
    tl.to(slabs, {
      xPercent: 100,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.inOut"
    });

    // 4. Reveal new content
    tl.to(toPanel.children, {
      y: 0,
      opacity: 1,
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.3");
  }

  toPanelB.addEventListener("click", () => switchPanels(panelA, panelB));
  toPanelA.addEventListener("click", () => switchPanels(panelB, panelA));
});
