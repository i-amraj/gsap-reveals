
// 3D Perspective Cyber Matrix Grid Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Laser Amber Industrial", "grid": "#f59e0b", "bg": "#140a02", "horizon": "#fbbf24", "accent": "#f59e0b"};
  let offset = 0;
  let speed = 1.0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    const horizon = height * 0.45;
    offset = (offset + 1.8 * speed) % 40;

    // Glowing horizon line
    const hGrad = ctx.createLinearGradient(0, horizon - 20, 0, horizon + 20);
    hGrad.addColorStop(0, 'transparent');
    hGrad.addColorStop(0.5, cfg.horizon || cfg.accent);
    hGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = hGrad;
    ctx.fillRect(0, horizon - 15, width, 30);

    ctx.strokeStyle = cfg.grid || cfg.accent;
    ctx.lineWidth = 1;

    // Perspective lines radiating from horizon vanishing point
    const lines = 24;
    for (let i = -lines; i <= lines; i++) {
      ctx.beginPath();
      ctx.moveTo(width * 0.5, horizon);
      const x = width * 0.5 + i * (width / lines) * 2;
      ctx.lineTo(x, height);
      ctx.globalAlpha = Math.max(0.15, 1 - Math.abs(i) / lines);
      ctx.stroke();
    }

    // Horizontal grid lines moving towards camera in 3D perspective
    for (let z = 1; z <= 25; z++) {
      const pz = (z * 18 + offset) % (height - horizon);
      const y = horizon + pz;
      const alpha = Math.min(1, (pz / (height - horizon)));
      ctx.globalAlpha = alpha * 0.7;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
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
