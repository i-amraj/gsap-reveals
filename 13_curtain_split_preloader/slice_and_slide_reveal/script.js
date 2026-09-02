const counterText = document.querySelector(".counter-text");
const counterContainer = document.querySelector(".counter-container");
let proxy = { val: 0 };

const tl = gsap.timeline({
  onComplete: () => {
    document.body.style.overflow = "auto";
  }
});

// Phase 1: Count up
tl.to(proxy, {
  val: 100,
  duration: 2.5,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val);
  }
});

// Phase 2: Fade the text out
tl.to(counterContainer, {
  scale: 1.5,
  opacity: 0,
  duration: 0.4,
  ease: "power2.in"
});

// Phase 3: The Mechanical Displace Reveal
// Top goes up
tl.to(".slice-top", {
  yPercent: -100,
  duration: 1.2,
  ease: "power4.inOut"
}, "displace");

// Middle slides right
tl.to(".slice-middle", {
  xPercent: 100,
  duration: 1.2,
  ease: "power4.inOut"
}, "displace");

// Bottom goes down
tl.to(".slice-bottom", {
  yPercent: 100,
  duration: 1.2,
  ease: "power4.inOut"
}, "displace");

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
