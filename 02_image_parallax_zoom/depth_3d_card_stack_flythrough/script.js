gsap.registerPlugin(ScrollTrigger);

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

// Initial 3D Z-Stack setup
gsap.set(card1, { z: 0, scale: 1, opacity: 1 });
gsap.set(card2, { z: -300, scale: 0.85, opacity: 0.7 });
gsap.set(card3, { z: -600, scale: 0.7, opacity: 0.4 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".stack-pin",
    start: "top top",
    end: "+=2500",
    scrub: 1,
    pin: true
  }
});

// Phase 1: Card 1 flies past camera lens
tl.to(card1, { z: 800, scale: 3.5, opacity: 0, ease: "power1.in" }, 0)
  .to(card2, { z: 0, scale: 1, opacity: 1, ease: "power1.out" }, 0)
  .to(card3, { z: -300, scale: 0.85, opacity: 0.7, ease: "power1.out" }, 0);

// Phase 2: Card 2 flies past camera lens
tl.to(card2, { z: 800, scale: 3.5, opacity: 0, ease: "power1.in" }, 1)
  .to(card3, { z: 0, scale: 1, opacity: 1, ease: "power1.out" }, 1);
