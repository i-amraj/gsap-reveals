
// Fiery Rising Embers & Ash Particle Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Dragon Blood Crimson Flame", "spark": "#ef4444", "core": "#f87171", "bg": "#170205", "accent": "#ef4444"};

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const embers = [];
  for (let i = 0; i < 90; i++) {
    embers.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      vy: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 1.5,
      life: Math.random()
    });
  }

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    for (let e of embers) {
      e.y -= e.vy;
      e.x += e.vx + Math.sin(e.y * 0.02) * 0.8;
      e.life += 0.01;

      if (e.y < -10) {
        e.y = height + 10;
        e.x = Math.random() * width;
        e.life = 0;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
      ctx.fillStyle = e.life < 0.5 ? (cfg.core || '#facc15') : (cfg.spark || '#ef4444');
      ctx.shadowBlur = 12;
      ctx.shadowColor = cfg.spark || '#ef4444';
      ctx.globalAlpha = Math.sin((1 - e.y / height) * Math.PI);
      ctx.fill();
      ctx.restore();
    }

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
