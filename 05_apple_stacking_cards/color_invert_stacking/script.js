gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");
const body = document.body;

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  const theme = container.getAttribute("data-theme");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top 50%", // Change theme when card is halfway up
    onEnter: () => applyTheme(theme),
    onEnterBack: () => applyTheme(theme),
  });

  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});

function applyTheme(theme) {
  if (theme === "light") {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
}
