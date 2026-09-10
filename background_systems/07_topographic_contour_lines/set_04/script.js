
// Undulating Topographic Elevation Contour Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Emerald Valley Contours", "line": "#4ade80", "bg": "#021509", "accent": "#4ade80"};
  let t = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    t += 0.008;
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 1.2;
    const numCurves = 16;
    for (let c = 0; c < numCurves; c++) {
      ctx.beginPath();
      const baseH = (height / numCurves) * c;
      ctx.strokeStyle = cfg.line || cfg.accent;
      ctx.globalAlpha = 0.15 + (c / numCurves) * 0.45;

      for (let x = 0; x <= width; x += 15) {
        const y = baseH + Math.sin(x * 0.004 + t + c * 0.4) * 45 + Math.cos(x * 0.002 - t * 0.5) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
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
