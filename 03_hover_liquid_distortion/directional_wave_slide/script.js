const card = document.querySelector(".fluid-slide-card");
const wrapper = document.querySelector(".overlay-wrapper");
const dispMap = document.querySelector("#waveDispMap");

card.addEventListener("mouseenter", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;

  // Trigger liquid wave ripple displacement
  gsap.fromTo(dispMap, 
    { attr: { scale: 65 } },
    { attr: { scale: 0 }, duration: 0.9, ease: "power2.out" }
  );

  // Reveal overlay wrapper across full card width
  gsap.to(wrapper, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.7,
    ease: "power3.inOut"
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(wrapper, {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    duration: 0.6,
    ease: "power3.inOut"
  });
});
