gsap.registerPlugin(Flip);

const container = document.getElementById("container");
const btn = document.getElementById("toggle-layout");

btn.addEventListener("click", () => {
  // 1. Get initial state
  const state = Flip.getState(".item, .img-box, .text");

  // 2. Make DOM changes
  container.classList.toggle("grid-layout");
  container.classList.toggle("list-layout");

  // 3. Animate from initial state to final state
  Flip.from(state, {
    duration: 0.8,
    ease: "power2.inOut",
    absolute: true, // handles absolute positioning during animation
    nested: true, // animate children properly
    stagger: 0.05
  });
});
