
// Gooey Liquid Metaballs Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Chromatic Iridescent Oil", "c1": "#06b6d4", "c2": "#f43f5e", "bg": "#040d18", "accent": "#06b6d4"};
  let mouse = { x: width/2, y: height/2 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const balls = [];
  for (let i = 0; i < 7; i++) {
    balls.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      r: Math.random() * 70 + 80
    });
  }

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    for (let b of balls) {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x < b.r || b.x > width - b.r) b.vx *= -1;
      if (b.y < b.r || b.y > height - b.r) b.vy *= -1;

      // Mouse attraction
      b.x += (mouse.x - b.x) * 0.01;
      b.y += (mouse.y - b.y) * 0.01;

      const grad = ctx.createRadialGradient(b.x, b.y, 10, b.x, b.y, b.r);
      grad.addColorStop(0, cfg.c1 || cfg.accent);
      grad.addColorStop(0.7, cfg.c2 || cfg.accent);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    requestAnimationFrame(render);
  }
  render();

  setupControls();
})();


function setupControls() {
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  const copyCssBtn = document.getElementById('copyCssBtn');
  if (copyCssBtn) {
    copyCssBtn.addEventListener('click', () => {
      fetch('styles.css').then(r => r.text()).then(css => {
        navigator.clipboard.writeText(css).then(() => showToast('Background CSS Tokens copied!'));
      });
    });
  }

  const copyPromptBtn = document.getElementById('copyPromptBtn');
  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      fetch('prompt.md').then(r => r.text()).then(text => {
        navigator.clipboard.writeText(text).then(() => showToast('AI Background Prompt copied!'));
      });
    });
  }

  const randomizeBtn = document.getElementById('randomizeBtn');
  if (randomizeBtn) {
    randomizeBtn.addEventListener('click', () => {
      showToast('Re-seeded background visual state!');
    });
  }
}
