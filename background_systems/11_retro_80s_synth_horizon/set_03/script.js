
// Retro 80s Outrun Synthwave Sun & Horizon Grid Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Laser Acid Night", "sun1": "#a3e635", "sun2": "#10b981", "grid": "#22c55e", "bg": "#02140a", "accent": "#22c55e"};
  let offset = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    const horizon = height * 0.55;
    offset = (offset + 1.5) % 35;

    // Outrun Striped Sun
    const sunR = Math.min(width, height) * 0.22;
    const sunX = width / 2;
    const sunY = horizon - 20;

    const sunGrad = ctx.createLinearGradient(sunX, sunY - sunR, sunX, sunY + sunR);
    sunGrad.addColorStop(0, cfg.sun1 || '#f43f5e');
    sunGrad.addColorStop(1, cfg.sun2 || '#facc15');

    ctx.save();
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, Math.PI, 0, false);
    ctx.fillStyle = sunGrad;
    ctx.shadowBlur = 30;
    ctx.shadowColor = cfg.sun1 || '#f43f5e';
    ctx.fill();

    // Horizontal cutout blinds through sun
    ctx.fillStyle = cfg.bg;
    for (let i = 0; i < 7; i++) {
      const barY = sunY - sunR * 0.4 + i * (sunR * 0.2);
      ctx.fillRect(sunX - sunR - 10, barY, (sunR + 10) * 2, 4 + i * 1.5);
    }
    ctx.restore();

    // 3D Grid Horizon
    ctx.strokeStyle = cfg.grid || cfg.accent;
    ctx.lineWidth = 1;
    for (let i = -16; i <= 16; i++) {
      ctx.beginPath();
      ctx.moveTo(width / 2, horizon);
      ctx.lineTo(width / 2 + i * (width / 16) * 1.5, height);
      ctx.globalAlpha = Math.max(0.15, 1 - Math.abs(i) / 16);
      ctx.stroke();
    }
    for (let z = 1; z <= 18; z++) {
      const y = horizon + ((z * 18 + offset) % (height - horizon));
      ctx.globalAlpha = 0.5;
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
