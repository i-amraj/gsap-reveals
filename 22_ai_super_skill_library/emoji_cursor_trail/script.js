const emojis = ["🔥", "✨", "🚀", "💥", "⚡"];

window.addEventListener("mousemove", (e) => {
  // Only spawn 1 in 3 mouse events to not overload DOM
  if(Math.random() > 0.3) return;

  const particle = document.createElement("div");
  particle.classList.add("emoji-particle");
  particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  document.body.appendChild(particle);
  
  gsap.set(particle, { x: e.clientX, y: e.clientY });
  
  // Physics based trail
  gsap.to(particle, {
    y: e.clientY + (Math.random() * 200 - 50),
    x: e.clientX + (Math.random() * 200 - 100),
    rotation: Math.random() * 360,
    opacity: 0,
    scale: Math.random() * 2,
    duration: 1 + Math.random(),
    ease: "power2.out",
    onComplete: () => particle.remove() // Clean up DOM
  });
});
