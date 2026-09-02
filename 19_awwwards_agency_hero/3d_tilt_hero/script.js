const wrapper = document.querySelector(".perspective-wrapper");
const card = document.querySelector(".tilt-card");

const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });
const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  
  // Normalized coordinates from -1 to 1
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const normX = (x - 0.5) * 2;
  const normY = (y - 0.5) * 2;
  
  // Rotate based on mouse (Y maps to X axis, X maps to Y axis)
  rotX(-normY * 20); // max 20 degrees
  rotY(normX * 20);
});

wrapper.addEventListener("mouseleave", () => {
  rotX(0);
  rotY(0);
});
