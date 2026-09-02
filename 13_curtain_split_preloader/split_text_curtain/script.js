const counterTop = document.querySelector(".counter-top");
const counterBottom = document.querySelector(".counter-bottom");

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
    const text = Math.floor(proxy.val) + "%";
    counterTop.innerText = text;
    counterBottom.innerText = text;
  }
});

// Phase 2: The Tear/Split Reveal
// We move the top curtain and top text half UP
tl.to([".curtain-top", ".counter-top"], {
  yPercent: -100,
  duration: 1.5,
  ease: "power4.inOut"
});

// We move the bottom curtain and bottom text half DOWN
tl.to([".curtain-bottom", ".counter-bottom"], {
  yPercent: 100,
  duration: 1.5,
  ease: "power4.inOut"
}, "<"); // Sync exactly with top half

// Phase 3: Hero Reveal
tl.from(".hero-title", {
  scale: 1.1,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
}, "-=1");

tl.to(".hero-subtitle", {
  opacity: 1,
  duration: 1
}, "-=0.8");
