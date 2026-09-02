let isDark = false;
const btn = document.getElementById("toggle-btn");
const mask = document.querySelector(".mode-mask");

btn.addEventListener("click", (e) => {
  // Get button coordinates to originate the circle from there
  const rect = btn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  // Set mask position and color
  gsap.set(mask, {
    left: x,
    top: y,
    xPercent: -50,
    yPercent: -50,
    width: 0,
    height: 0,
    backgroundColor: isDark ? "#ffffff" : "#000000"
  });
  
  // Animate mask expanding to cover screen
  // Math: max distance to corner from anywhere is ~diagonal of screen
  const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);
  
  gsap.to(mask, {
    width: maxRadius * 2,
    height: maxRadius * 2,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () => {
      // Once screen is covered, swap the actual CSS variables on body
      isDark = !isDark;
      if (isDark) document.body.classList.add("dark-mode");
      else document.body.classList.remove("dark-mode");
      
      // Reset mask immediately so it's ready for next time
      gsap.set(mask, { width: 0, height: 0 });
    }
  });
});
