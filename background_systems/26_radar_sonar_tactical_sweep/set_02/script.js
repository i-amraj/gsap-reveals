
// Military Sonar Radar Tactical 360 Sweep Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Tactical Amber Aircraft HUD", "beam": "#fbbf24", "bg": "#120801", "accent": "#fbbf24"};
  let angle = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const blips = [
    { angle: 1.2, dist: 0.35, alpha: 0 },
    { angle: 3.8, dist: 0.65, alpha: 0 },
    { angle: 5.1, dist: 0.50, alpha: 0 }
  ];

  function render() {
    angle = (angle + 0.025) % (Math.PI * 2);
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const maxR = Math.min(width, height) * 0.42;

    // Concentric Range Rings
    ctx.strokeStyle = cfg.beam || cfg.accent;
    ctx.lineWidth = 1;
    for (let r = 1; r <= 4; r++) {
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.arc(cx, cy, (maxR / 4) * r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy);
    ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR);
    ctx.stroke();

    // Rotating Sweep Beam
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
    grad.addColorStop(0, (cfg.beam || cfg.accent) + '88');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, maxR, -0.4, 0);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.restore();

    // Target Blips
    for (let b of blips) {
      if (Math.abs(angle - b.angle) < 0.05) b.alpha = 1.0;
      if (b.alpha > 0) {
        b.alpha -= 0.008;
        ctx.fillStyle = cfg.beam || cfg.accent;
        ctx.globalAlpha = Math.max(0, b.alpha);
        const bx = cx + Math.cos(b.angle) * maxR * b.dist;
        const by = cy + Math.sin(b.angle) * maxR * b.dist;
        ctx.beginPath();
        ctx.arc(bx, by, 4, 0, Math.PI * 2);
        ctx.fill();
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
