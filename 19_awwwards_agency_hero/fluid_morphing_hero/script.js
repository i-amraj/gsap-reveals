// We will simulate fluid morphing via GSAP attr plugin (native) if point counts match.
// For this demo, we'll rotate and scale the blob organically, as a real morph requires matching point data or MorphSVGPlugin

gsap.to("#blob path", {
  rotation: 360,
  transformOrigin: "50% 50%",
  duration: 20,
  repeat: -1,
  ease: "none"
});

gsap.to("#blob path", {
  scaleX: 1.1,
  scaleY: 0.9,
  transformOrigin: "50% 50%",
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Parallax the blob slightly on mouse move
const wrapper = document.querySelector(".blob-wrapper");
const xMove = gsap.quickTo(wrapper, "xPercent", { duration: 1, ease: "power2" });
const yMove = gsap.quickTo(wrapper, "yPercent", { duration: 1, ease: "power2" });

window.addEventListener("mousemove", (e) => {
  const normX = (e.clientX / window.innerWidth) - 0.5;
  const normY = (e.clientY / window.innerHeight) - 0.5;
  
  // Note: wrapper starts at -50% -50% due to translate, so we add to that
  xMove(-50 + (normX * 10));
  yMove(-50 + (normY * 10));
});

// Title reveal
gsap.from(".content", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  ease: "power3.out"
});
