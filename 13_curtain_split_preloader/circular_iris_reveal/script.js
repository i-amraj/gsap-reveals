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
  duration: 2,
  ease: "power2.inOut",
  onUpdate: () => {
    counterText.innerText = Math.floor(proxy.val) + "%";
  }
});

// Phase 2: Fade out the UI elements inside the preloader
tl.to(counterContainer, {
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "power2.in"
});

// Phase 3: The Circular Iris Reveal
// Animate the clip-path of the entire wrapper down to 0% radius
tl.to(".preloader-wrapper", {
  clipPath: "circle(0% at 50% 50%)",
  duration: 1.5,
  ease: "power4.inOut"
}, "-=0.1");

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  scale: 1.1,
  filter: "blur(10px)", // Optional blur for that camera focus feel
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
