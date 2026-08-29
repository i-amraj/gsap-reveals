const card = document.querySelector(".jelly-card");
const dispMap = document.querySelector("#jellyDispMap");

card.addEventListener("mouseenter", () => {
  gsap.fromTo(dispMap, 
    { attr: { scale: 40 } },
    { attr: { scale: 0 }, duration: 1.5, ease: "elastic.out(1, 0.3)" }
  );
});

card.addEventListener("mouseleave", () => {
  gsap.fromTo(dispMap, 
    { attr: { scale: -40 } },
    { attr: { scale: 0 }, duration: 1.5, ease: "elastic.out(1, 0.3)" }
  );
});
