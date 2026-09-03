gsap.registerPlugin(Flip);

const items = gsap.utils.toArray(".item");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // UI Update
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    
    const filter = btn.getAttribute("data-filter");
    
    // 1. Get current state of all items
    const state = Flip.getState(items);
    
    // 2. Change DOM (add/remove 'hidden' class based on filter)
    items.forEach(item => {
      if(filter === "all" || item.classList.contains(filter)) {
        item.style.display = "flex"; // Reset to default
      } else {
        item.style.display = "none";
      }
    });
    
    // 3. Animate from previous state to new state using FLIP
    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: "power3.inOut",
      absolute: true, // Crucial for elements leaving the flow
      onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 0.7}),
      onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 0.7})
    });
  });
});
