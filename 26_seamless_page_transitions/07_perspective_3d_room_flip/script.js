// Transition 07: 3D Perspective Room Cube Flip with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const room = document.getElementById("cubeRoom");
  const btnFlipRight = document.getElementById("btnFlipRight");
  const btnFlipLeft = document.getElementById("btnFlipLeft");

  let isFlipped = false;
  let isAnimating = false;

  function flipRoom(targetAngle) {
    if (isAnimating) return;
    isAnimating = true;

    // Timeline that pulls room slightly backward during 3D rotation, then pushes back
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      }
    });

    tl.to(room, {
      z: -250, // Push room backward for cinematic parallax depth
      duration: 0.45,
      ease: "power2.in"
    })
    .to(room, {
      rotateY: targetAngle,
      duration: 0.8,
      ease: "power3.inOut"
    }, "-=0.25")
    .to(room, {
      z: 0, // Settle back forward into viewport
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.2");
  }

  btnFlipRight.addEventListener("click", () => {
    flipRoom(-90);
  });

  btnFlipLeft.addEventListener("click", () => {
    flipRoom(0);
  });
});
