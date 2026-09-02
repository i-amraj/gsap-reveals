// 1. Generate Bars
const barsContainer = document.querySelector(".bars-container");
for (let i = 0; i < 10; i++) {
  const bar = document.createElement("div");
  bar.classList.add("bar");
  barsContainer.appendChild(bar);
}

// 2. Setup Animation
const counterText = document.querySelector(".counter-text");
let proxy = { val: 0 };

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "auto";
  }
});

// Phase 1: Simultaneous Loading
// The counter ticks up to 100
tl.to(proxy, {
  val: 100,
  duration: 2.5,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val) + "%";
  }
}, "load");

// The bars grow to fill the screen
tl.to(".bar", {
  height: "100%",
  duration: 1.5,
  ease: "power3.inOut",
  stagger: 0.1
}, "load");

// Phase 2: Fade out Counter Text
tl.to(counterText, {
  opacity: 0,
  duration: 0.3
});

// Phase 3: The Staggered Reveal
// The bars slide up and out of the way
tl.to(".bar", {
  yPercent: -100,
  duration: 1,
  ease: "power4.inOut",
  stagger: 0.05
});

// Phase 4: Hero Reveal
tl.from(".hero-title", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.6");
