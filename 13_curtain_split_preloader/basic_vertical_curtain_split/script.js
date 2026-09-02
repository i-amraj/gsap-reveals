// 1. Setup the Counter
const counterText = document.querySelector(".counter-text");
const progressBar = document.querySelector(".progress");
const counterContainer = document.querySelector(".counter-container");

let proxy = { val: 0 };

// 2. Main Timeline
const tl = gsap.timeline({
  onComplete: () => {
    // Unlock scrolling once loader is gone
    document.body.style.overflow = "auto";
  }
});

// Phase 1: Counting up to 100%
tl.to(proxy, {
  val: 100,
  duration: 2.5,
  ease: "power2.out", // Fast start, slowing down as it reaches 100
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val) + "%";
    progressBar.style.width = proxy.val + "%";
  }
});

// Phase 2: Fade out the UI
tl.to(counterContainer, {
  opacity: 0,
  duration: 0.4,
  ease: "power1.inOut"
});

// Phase 3: The Dramatic Curtain Split Reveal
tl.to(".curtain-top", {
  yPercent: -100,
  duration: 1.2,
  ease: "power4.inOut"
}, "-=0.2"); // Start slightly before UI finishes fading

tl.to(".curtain-bottom", {
  yPercent: 100,
  duration: 1.2,
  ease: "power4.inOut"
}, "<"); // Sync exactly with top curtain

// Phase 4: Stagger reveal the hero content (bonus)
tl.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.6");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.5");
