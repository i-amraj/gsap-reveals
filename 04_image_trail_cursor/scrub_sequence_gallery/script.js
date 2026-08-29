const images = document.querySelectorAll(".seq-img");
const totalImages = images.length;
let activeIndex = 0;

window.addEventListener("mousemove", (e) => {
  // Calculate scrub percentage based on X position
  const percent = e.clientX / window.innerWidth;
  
  // Map percentage to an index in the images array
  let targetIndex = Math.floor(percent * totalImages);
  
  // Clamp index just in case
  if (targetIndex >= totalImages) targetIndex = totalImages - 1;
  if (targetIndex < 0) targetIndex = 0;

  // Only animate if the target index changes
  if (targetIndex !== activeIndex) {
    // Hide old active image
    gsap.to(images[activeIndex], {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.out"
    });

    // Show new active image
    gsap.to(images[targetIndex], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });

    activeIndex = targetIndex;
  }
});
