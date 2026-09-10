
// Electronic Circuit PCB Copper Bus Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Gold Plated Motherboard", "trace": "#a16207", "pulse": "#fde047", "bg": "#120e03", "accent": "#fde047"};

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const traces = [];
  const spacing = 50;
  for (let x = 40; x < width; x += spacing) {
    traces.push({
      x: x,
      y: 0,
      turnY: Math.random() * height * 0.6 + 100,
      turnOffset: (Math.random() > 0.5 ? 1 : -1) * 45,
      pulses: [Math.random() * height, Math.random() * height]
    });
  }

  function render() {
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 1.5;
    for (let t of traces) {
      ctx.strokeStyle = cfg.trace || cfg.accent;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.moveTo(t.x, 0);
      ctx.lineTo(t.x, t.turnY);
      ctx.lineTo(t.x + t.turnOffset, t.turnY + Math.abs(t.turnOffset));
      ctx.lineTo(t.x + t.turnOffset, height);
      ctx.stroke();

      // Electron Pulses
      ctx.fillStyle = cfg.pulse || cfg.accent;
      ctx.globalAlpha = 1.0;
      for (let i = 0; i < t.pulses.length; i++) {
        t.pulses[i] = (t.pulses[i] + 2.5) % height;
        const py = t.pulses[i];
        let px = t.x;
        if (py > t.turnY && py < t.turnY + Math.abs(t.turnOffset)) {
          px = t.x + (py - t.turnY) * (t.turnOffset > 0 ? 1 : -1);
        } else if (py >= t.turnY + Math.abs(t.turnOffset)) {
          px = t.x + t.turnOffset;
        }
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = cfg.pulse || cfg.accent;
        ctx.fill();
      }
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
