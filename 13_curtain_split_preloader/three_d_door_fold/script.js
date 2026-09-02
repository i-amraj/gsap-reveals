// To make sure CSS 3D transforms work smoothly in GSAP, we set transformPerspective
gsap.set(".door", { transformPerspective: 1500 });

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

// Phase 2: Counter text scales towards the camera and fades
tl.to(counterContainer, {
  scale: 2,
  opacity: 0,
  duration: 0.5,
  ease: "power2.in"
});

// Phase 3: The 3D Door Swing
// Left door swings outwards around its left hinge
tl.to(".door-left", {
  rotateY: 90,
  duration: 1.5,
  ease: "power3.inOut"
}, "-=0.2");

// Right door swings outwards around its right hinge
tl.to(".door-right", {
  rotateY: -90,
  duration: 1.5,
  ease: "power3.inOut"
}, "<"); // Sync exactly with left door

// Phase 4: Hero Content Reveal
tl.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=0.8");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=1");
