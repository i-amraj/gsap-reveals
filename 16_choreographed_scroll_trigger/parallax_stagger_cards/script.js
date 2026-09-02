gsap.registerPlugin(ScrollTrigger);

// 1. Initial Stagger Reveal
gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".parallax-stagger-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

// 2. Continuous Parallax while scrolling
gsap.to(".col-left", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-stagger-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".col-right", {
  y: 100, // Move slower / different direction for parallax
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-stagger-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
