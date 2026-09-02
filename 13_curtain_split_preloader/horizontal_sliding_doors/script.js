const counterText = document.querySelector(".counter-text");
const counterContainer = document.querySelector(".counter-container");

let proxy = { val: 0 };

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "auto";
  }
});

// Initially animate the counter text IN
tl.from(counterText, {
  yPercent: 100,
  duration: 1,
  ease: "power3.out"
});

// Phase 1: Count up
tl.to(proxy, {
  val: 100,
  duration: 2,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Fade / slide the counter out
tl.to(counterText, {
  yPercent: -100,
  duration: 0.8,
  ease: "power3.in"
});

// Phase 3: Pull the doors apart
tl.to(".door-left", {
  xPercent: -100,
  duration: 1.5,
  ease: "power4.inOut"
}, "-=0.2"); // Overlap slightly with text leaving

tl.to(".door-right", {
  xPercent: 100,
  duration: 1.5,
  ease: "power4.inOut"
}, "<"); // Sync with door-left

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 0.9,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
