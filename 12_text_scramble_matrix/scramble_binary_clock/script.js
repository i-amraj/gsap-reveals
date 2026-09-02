const clockEl = document.querySelector(".clock-text");
const chars = "01"; // Pure binary scramble

let currentTween = null;
let proxy = { progress: 0 };

function tick() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${h}:${m}:${s}`;
  
  if (currentTween) currentTween.kill();
  
  proxy.progress = 0;
  
  currentTween = gsap.to(proxy, {
    progress: 1,
    duration: 0.5, // Decrypts over half a second
    ease: "power2.out",
    onUpdate: () => {
      let output = "";
      for (let i = 0; i < timeString.length; i++) {
        // Resolve left-to-right
        if (i < timeString.length * proxy.progress) {
          output += timeString[i];
        } else {
          // Keep colons static to maintain formatting structure
          if (timeString[i] === ":") {
            output += ":";
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      clockEl.innerText = output;
      
      // Pulse glow during scramble
      if (proxy.progress < 0.9) {
        clockEl.style.textShadow = "0 0 25px rgba(56, 189, 248, 0.8)";
        clockEl.style.color = "#38bdf8";
      } else {
        clockEl.style.textShadow = "0 0 15px rgba(56, 189, 248, 0.3)";
        clockEl.style.color = "#f8fafc";
      }
    }
  });
}

// Initial call
tick();

// Run every second
setInterval(tick, 1000);
