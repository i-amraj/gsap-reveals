// Continuous idle rotation
const idle = gsap.to(".cube", {
  rotationX: "+=360",
  rotationY: "+=360",
  duration: 15,
  repeat: -1,
  ease: "none"
});

document.getElementById("spin-btn").addEventListener("click", () => {
  gsap.to(".cube", {
    rotationX: "+=" + (Math.random() * 360 + 360),
    rotationY: "+=" + (Math.random() * 360 + 360),
    duration: 2,
    ease: "power3.inOut"
  });
});

let exploded = false;
document.getElementById("explode-btn").addEventListener("click", () => {
  const distance = exploded ? 100 : 300;
  
  gsap.to(".front", { z: distance, duration: 1, ease: "back.out(1.5)" });
  gsap.to(".back", { z: -distance, duration: 1, ease: "back.out(1.5)" });
  
  // Note: For right/left/top/bottom, their local Z axis points outwards
  // So animating 'z' will push them outwards correctly based on their rotation.
  gsap.to(".right", { z: distance, duration: 1, ease: "back.out(1.5)" });
  gsap.to(".left", { z: distance, duration: 1, ease: "back.out(1.5)" });
  gsap.to(".top", { z: distance, duration: 1, ease: "back.out(1.5)" });
  gsap.to(".bottom", { z: distance, duration: 1, ease: "back.out(1.5)" });
  
  exploded = !exploded;
});
