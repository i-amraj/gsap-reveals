
// 3D Warp Speed Starfield Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Matrix Emerald Stream", "star": "#4ade80", "bg": "#021206", "accent": "#4ade80", "speed": 5};
  let speed = cfg.speed || 4;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const numStars = 400;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      pz: 0
    });
  }

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    for (let s of stars) {
      s.pz = s.z;
      s.z -= speed * 1.5;

      if (s.z <= 0) {
        s.z = width;
        s.pz = width;
        s.x = (Math.random() - 0.5) * width * 2;
        s.y = (Math.random() - 0.5) * height * 2;
      }

      const k = 250 / s.z;
      const px = s.x * k + cx;
      const py = s.y * k + cy;

      const pk = 250 / s.pz;
      const prevX = s.x * pk + cx;
      const prevY = s.y * pk + cy;

      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        const alpha = Math.min(1, (1 - s.z / width) * 1.5);
        ctx.strokeStyle = cfg.star || cfg.accent;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.max(1, (1 - s.z / width) * 3);
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1.0;
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
