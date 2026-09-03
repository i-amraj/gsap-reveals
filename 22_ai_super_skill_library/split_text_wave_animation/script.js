const chars = document.querySelectorAll(".wave-text span");

gsap.to(chars, {
  y: -20,
  duration: 0.5,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
  stagger: {
    each: 0.05,
    from: "start"
  }
});
