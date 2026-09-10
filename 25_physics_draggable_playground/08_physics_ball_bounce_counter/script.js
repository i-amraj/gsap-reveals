// Physics 08: Multi-Ball Gravitational Bounce Chamber with GSAP Ticker
document.addEventListener("DOMContentLoaded", () => {
  const chamber = document.getElementById("chamber");
  const ballCountEl = document.getElementById("ballCount");
  const bounceCountEl = document.getElementById("bounceCount");
  const clearBtn = document.getElementById("clearBtn");
  const burstBtn = document.getElementById("burstBtn");

  const colors = ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b", "#38bdf8"];
  const balls = [];
  let totalBounces = 0;

  const gravity = 0.65;
  const restitution = 0.78; // Energy retention per bounce
  const friction = 0.992;   // Air resistance

  function spawnBall(x, y, vx, vy) {
    const el = document.createElement("div");
    el.classList.add("physics-ball");

    const radius = Math.random() * 10 + 12; // 12px to 22px
    const color = colors[Math.floor(Math.random() * colors.length)];

    el.style.width = `${radius * 2}px`;
    el.style.height = `${radius * 2}px`;
    el.style.background = `radial-gradient(circle at 35% 35%, #fff 10%, ${color} 70%)`;
    el.style.boxShadow = `0 0 15px ${color}`;

    chamber.appendChild(el);

    const ball = {
      el,
      x: x,
      y: y,
      vx: vx !== undefined ? vx : (Math.random() - 0.5) * 12,
      vy: vy !== undefined ? vy : (Math.random() - 2) * 8,
      r: radius,
      color
    };

    balls.push(ball);
    ballCountEl.textContent = balls.length;
  }

  // Click on stage spawns ball
  chamber.addEventListener("click", (e) => {
    const rect = chamber.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spawnBall(x, y);
  });

  // GSAP 60FPS physics loop
  gsap.ticker.add(() => {
    const width = chamber.clientWidth;
    const height = chamber.clientHeight;

    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];

      b.vy += gravity;
      b.vx *= friction;

      b.x += b.vx;
      b.y += b.vy;

      // Floor collision
      if (b.y + b.r > height) {
        b.y = height - b.r;
        b.vy = -b.vy * restitution;
        totalBounces++;
        bounceCountEl.textContent = totalBounces.toLocaleString();

        // Squash on floor impact
        gsap.fromTo(b.el, 
          { scaleY: 0.7, scaleX: 1.3 }, 
          { scaleY: 1, scaleX: 1, duration: 0.15 }
        );
      }

      // Ceiling collision
      if (b.y - b.r < 0) {
        b.y = b.r;
        b.vy = -b.vy * restitution;
      }

      // Left wall collision
      if (b.x - b.r < 0) {
        b.x = b.r;
        b.vx = -b.vx * restitution;
        totalBounces++;
        bounceCountEl.textContent = totalBounces.toLocaleString();
      }

      // Right wall collision
      if (b.x + b.r > width) {
        b.x = width - b.r;
        b.vx = -b.vx * restitution;
        totalBounces++;
        bounceCountEl.textContent = totalBounces.toLocaleString();
      }

      // Position update
      gsap.set(b.el, { x: b.x, y: b.y });
    }
  });

  // Spawn initial burst
  for (let i = 0; i < 5; i++) {
    spawnBall(150 + i * 120, 100);
  }

  // Burst button
  burstBtn.addEventListener("click", () => {
    const w = chamber.clientWidth;
    for (let i = 0; i < 10; i++) {
      spawnBall(w / 2, 80, (Math.random() - 0.5) * 18, (Math.random() - 1) * 10);
    }
  });

  // Clear button
  clearBtn.addEventListener("click", () => {
    balls.forEach(b => b.el.remove());
    balls.length = 0;
    ballCountEl.textContent = "0";
  });
});
