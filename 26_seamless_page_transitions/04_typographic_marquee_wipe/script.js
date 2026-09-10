// Transition 04: Typographic Marquee Wipe with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const curtain = document.getElementById("curtain");
  const view1 = document.getElementById("view1");
  const view2 = document.getElementById("view2");
  const btnToView2 = document.getElementById("btnToView2");
  const btnToView1 = document.getElementById("btnToView1");

  let isBusy = false;

  function performWipe(fromView, toView, curtainColor = "#7c3aed") {
    if (isBusy) return;
    isBusy = true;

    curtain.style.backgroundColor = curtainColor;

    const tl = gsap.timeline({
      onComplete: () => {
        isBusy = false;
      }
    });

    // 1. Curtain sweeps upward from bottom
    tl.fromTo(curtain, 
      { yPercent: 100 },
      { yPercent: 0, duration: 0.65, ease: "power4.inOut" }
    );

    // 2. Switch DOM views under cover
    tl.add(() => {
      fromView.classList.add("is-hidden");
      toView.classList.remove("is-hidden");
      gsap.set(toView.children, { y: 30, opacity: 0 });
    });

    // 3. Curtain continues upward and exits off top
    tl.to(curtain, {
      yPercent: -100,
      duration: 0.65,
      ease: "power4.inOut"
    });

    // 4. Stagger reveal destination content
    tl.to(toView.children, {
      y: 0,
      opacity: 1,
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.25");
  }

  btnToView2.addEventListener("click", () => performWipe(view1, view2, "#7c3aed"));
  btnToView1.addEventListener("click", () => performWipe(view2, view1, "#be123c"));
});
