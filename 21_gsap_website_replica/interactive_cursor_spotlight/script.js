// We will use gsap.quickTo to update the CSS mask position
const hero = document.querySelector(".spotlight-hero");

// Using CSS variables to drive the mask position
gsap.set(hero, {
  "--x": window.innerWidth / 2,
  "--y": window.innerHeight / 2
});

hero.style.webkitMaskImage = `radial-gradient(circle 200px at var(--x)px var(--y)px, black 40%, transparent 100%)`;
hero.style.maskImage = `radial-gradient(circle 200px at var(--x)px var(--y)px, black 40%, transparent 100%)`;

const xTo = gsap.quickTo(hero, "--x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(hero, "--y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});
