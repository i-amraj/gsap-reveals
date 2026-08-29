const card = document.querySelector(".echo-card");
const rippleContainer = document.querySelector(".ripple-container");

let lastRippleTime = 0;

card.addEventListener("mousemove", (e) => {
  const now = Date.now();
  // Throttle to avoid too many DOM elements
  if (now - lastRippleTime < 80) return;
  lastRippleTime = now;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Create ripple element
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  
  // Set initial position
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  
  rippleContainer.appendChild(ripple);

  // Animate and remove
  gsap.to(ripple, {
    scale: 15,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
      ripple.remove();
    }
  });
});
