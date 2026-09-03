// Initial positions
gsap.set(".b1", { x: 0, y: 0 });
gsap.set(".b2", { x: 0, y: 0 });
gsap.set(".b3", { x: 0, y: 0 });

// Animate the blobs continuously orbiting/wiggling out of the center blob
gsap.to(".b1", {
  x: 100, y: -80,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "power2.inOut"
});

gsap.to(".b2", {
  x: -120, y: -40,
  duration: 2.5,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

gsap.to(".b3", {
  x: 50, y: 120,
  duration: 3.5,
  yoyo: true,
  repeat: -1,
  ease: "power3.inOut"
});
