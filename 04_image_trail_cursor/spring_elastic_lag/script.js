// Initialize GSAP quickTo functions for each image for high performance tracking
const images = [
  document.querySelector(".img-1"), // Lead
  document.querySelector(".img-2"),
  document.querySelector(".img-3"),
  document.querySelector(".img-4"),
  document.querySelector(".img-5")  // Tail
];

// Set initial scales so they pop in on first move
gsap.set(".elastic-img", { scale: 0 });

let isFirstMove = true;

// Create quickTo setters with increasing durations to create the elastic lag
const setters = images.map((img, index) => {
  // Base duration is 0.1s, each subsequent image adds 0.15s lag
  const dur = 0.1 + (index * 0.15); 
  
  return {
    xTo: gsap.quickTo(img, "x", { duration: dur, ease: "elastic.out(1, 0.4)" }),
    yTo: gsap.quickTo(img, "y", { duration: dur, ease: "elastic.out(1, 0.4)" }),
    element: img
  };
});

window.addEventListener("mousemove", (e) => {
  if (isFirstMove) {
    // Pop them all in on first interaction
    gsap.to(".elastic-img", { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", stagger: 0.1 });
    isFirstMove = false;
  }
  
  // Center coordinates
  const x = e.clientX;
  const y = e.clientY;

  // Update all setters
  setters.forEach(setter => {
    // Offset by 50% since we use top:0 left:0 and translate(-50%, -50%) in CSS via margin/transform
    // Since GSAP quickTo affects x/y transforms, we don't need to do complex math, just pass coordinates
    // Assuming CSS has `transform: translate(-50%, -50%)`, quickTo appends `translate(x, y)`
    // So we just pass clientX and clientY
    setter.xTo(x);
    setter.yTo(y);
  });
});

window.addEventListener("mouseleave", () => {
  // Shrink when mouse leaves window
  gsap.to(".elastic-img", { scale: 0, duration: 0.8, ease: "power3.in", stagger: 0.05 });
  isFirstMove = true;
});
