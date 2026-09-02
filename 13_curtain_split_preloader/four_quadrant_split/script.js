const counterText = document.querySelector(".counter-text");

let proxy = { val: 0 };

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "auto";
  }
});

// Phase 1: Count up
tl.to(proxy, {
  val: 100,
  duration: 2,
  ease: "power3.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val) + "%";
  }
});

// Phase 2: Scale text down into nothing
tl.to(counterText, {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  ease: "back.in(1.7)"
});

// Phase 3: The Four Quadrant Burst
// They move simultaneously in 4 different diagonal directions
tl.to(".quad-tl", { xPercent: -100, yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "burst");
tl.to(".quad-tr", { xPercent: 100, yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "burst");
tl.to(".quad-bl", { xPercent: -100, yPercent: 100, duration: 1.2, ease: "power4.inOut" }, "burst");
tl.to(".quad-br", { xPercent: 100, yPercent: 100, duration: 1.2, ease: "power4.inOut" }, "burst");

// Phase 4: Hero Reveal
tl.from(".hero-title", {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
