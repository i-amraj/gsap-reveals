gsap.registerPlugin(ScrollTrigger);

// Generate keys dynamically
const keysContainer = document.getElementById("keys");
for (let i = 0; i < 56; i++) {
  const key = document.createElement("div");
  key.classList.add("key");
  keysContainer.appendChild(key);
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".keyboard-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Initially set iPad flat against base (closed)
gsap.set(".ipad-pro", { rotateX: 60, translateY: -250, translateZ: 0 });

// Animate opening the cantilever design
tl.to(".ipad-pro", {
  rotateX: 10,
  translateY: -150, // Float up
  translateZ: 150, // Move forward
  duration: 1.5,
  ease: "power2.out"
})
// Reveal text
.to(".hero-text h1", { opacity: 1, x: 0, duration: 0.5 }, "-=0.5")
.to(".hero-text p", { opacity: 1, x: 0, duration: 0.5 }, "-=0.3");
