// Transition 06: Liquid Displacement Ripple Page Swap with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const displaceMap = document.getElementById("displaceMap");
  const turbulence = document.getElementById("turbulence");
  const container = document.getElementById("pageContainer");
  const view1 = document.getElementById("view1");
  const view2 = document.getElementById("view2");
  const btnToView2 = document.getElementById("btnToView2");
  const btnToView1 = document.getElementById("btnToView1");

  let isWarping = false;

  function performLiquidWarp(fromView, toView) {
    if (isWarping) return;
    isWarping = true;

    container.classList.add("is-warping");

    const filterObj = { scale: 0, freq: 0.015 };

    const tl = gsap.timeline({
      onComplete: () => {
        container.classList.remove("is-warping");
        isWarping = false;
      }
    });

    // 1. Ramp up liquid displacement distortion
    tl.to(filterObj, {
      scale: 75,
      freq: 0.04,
      duration: 0.5,
      ease: "power2.in",
      onUpdate: () => {
        displaceMap.setAttribute("scale", filterObj.scale);
        turbulence.setAttribute("baseFrequency", filterObj.freq);
      }
    });

    // 2. Crossfade content at maximum distortion
    tl.to(fromView, { opacity: 0, scale: 0.95, duration: 0.25 }, "-=0.2");

    tl.add(() => {
      fromView.classList.add("is-hidden");
      toView.classList.remove("is-hidden");
      gsap.set(toView, { opacity: 0, scale: 1.05 });
    });

    tl.to(toView, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });

    // 3. Relax displacement distortion back to crystal-clear 0
    tl.to(filterObj, {
      scale: 0,
      freq: 0.015,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: () => {
        displaceMap.setAttribute("scale", filterObj.scale);
        turbulence.setAttribute("baseFrequency", filterObj.freq);
      }
    });
  }

  btnToView2.addEventListener("click", () => performLiquidWarp(view1, view2));
  btnToView1.addEventListener("click", () => performLiquidWarp(view2, view1));
});
