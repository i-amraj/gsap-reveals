const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;

// Track active images and their center coordinates
const activeImages = []; 
const repelRadius = 150; 

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  
  // 1. Repel existing images
  activeImages.forEach((obj, index) => {
    if (obj.isRepelled) return; // Only repel once
    
    const dx = obj.x - currentPos.x;
    const dy = obj.y - currentPos.y;
    const dist = Math.hypot(dx, dy);
    
    if (dist < repelRadius) {
      obj.isRepelled = true;
      // Calculate push direction and force
      const angle = Math.atan2(dy, dx);
      const force = (repelRadius - dist) * 2; // Stronger push if closer
      
      const pushX = obj.x + Math.cos(angle) * force * 3;
      const pushY = obj.y + Math.sin(angle) * force * 3;
      
      gsap.to(obj.el, {
        x: pushX - 70, // Adjust for center offset
        y: pushY - 70,
        rotation: gsap.utils.random(-180, 180),
        scale: 0.2,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          obj.el.remove();
          activeImages.splice(activeImages.indexOf(obj), 1);
        }
      });
    }
  });

  // 2. Spawn new images
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnRepelImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnRepelImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("repel-img");
  
  img.style.left = `${x}px`;
  img.style.top = `${y}px`; // Note CSS has translate(-50%, -50%)
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  gsap.to(img, { scale: 1, duration: 0.4, ease: "back.out(1.5)" });
  
  // Store obj reference
  const obj = { el: img, x: x, y: y, isRepelled: false };
  activeImages.push(obj);
  
  // Max cap 40
  if (activeImages.length > 40) {
    const oldest = activeImages.shift();
    if (!oldest.isRepelled) {
      gsap.to(oldest.el, { opacity: 0, scale: 0, duration: 0.5, onComplete: () => oldest.el.remove() });
    }
  }
}
