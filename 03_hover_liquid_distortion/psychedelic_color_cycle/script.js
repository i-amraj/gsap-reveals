const card = document.querySelector(".psycho-card");
const dispMap = document.querySelector("#psychoDispMap");
const hueMatrix = document.querySelector("#hueMatrix");

let hueAnim;

card.addEventListener("mouseenter", () => {
  // Start the wave displacement
  gsap.to(dispMap, { attr: { scale: 40 }, duration: 0.8, ease: "power2.out" });
  
  // Create a continuous looping animation for the hueRotate values (0 to 360)
  // GSAP can animate attributes that contain numbers.
  hueAnim = gsap.to(hueMatrix, {
    attr: { values: 360 },
    duration: 2,
    repeat: -1,
    ease: "none"
  });
});

card.addEventListener("mouseleave", () => {
  // Stop wave
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 1.2, ease: "power3.out" });
  
  // Pause the hue rotation and tween it back to 0
  if (hueAnim) {
    hueAnim.kill();
  }
  gsap.to(hueMatrix, {
    attr: { values: 0 },
    duration: 1,
    ease: "power2.out"
  });
});
