const container = document.getElementById("particles-container");
const colors = ["#88ce02", "#a2e604", "#fff", "#444"];
let particles = [];

// Create 100 particles
for(let i=0; i<100; i++) {
  let p = document.createElement("div");
  p.classList.add("particle");
  p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  container.appendChild(p);
  particles.push(p);
}

document.getElementById("burst-btn").addEventListener("click", () => {
  const tl = gsap.timeline();
  
  // Wiggle the logo
  tl.to(".logo-wrapper", {
    scale: 0.8,
    rotation: -10,
    duration: 0.2,
    ease: "power2.in"
  })
  .to(".logo-wrapper", {
    scale: 1.2,
    rotation: 10,
    duration: 0.1,
    ease: "power2.out"
  })
  .to(".logo-wrapper", {
    scale: 1,
    rotation: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)"
  });
  
  // Burst the particles from center
  gsap.set(particles, { x: window.innerWidth/2, y: window.innerHeight/2, scale: 0, opacity: 1 });
  
  gsap.to(particles, {
    x: () => window.innerWidth/2 + (Math.random() * 600 - 300),
    y: () => window.innerHeight/2 + (Math.random() * 600 - 300),
    scale: () => Math.random() * 2,
    opacity: 0,
    rotation: () => Math.random() * 360,
    duration: () => 0.5 + Math.random() * 1.5,
    ease: "power3.out",
    stagger: 0.005
  });
});
