
// Rotating 3D Isometric Polyhedral Wireframe Engine
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  const cfg = {"title": "Hexagonal Emerald Matrix", "color": "#10b981", "bg": "#02160e", "accent": "#10b981"};
  let angleX = 0, angleY = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 3D Cube Vertices
  const vertices = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
  ];

  function render() {
    angleX += 0.008;
    angleY += 0.012;
    ctx.fillStyle = cfg.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.strokeStyle = cfg.color || cfg.accent;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = ctx.strokeStyle;

    const scale = Math.min(width, height) * 0.28;
    const projected = vertices.map(v => {
      // Rotation
      let x = v[0], y = v[1], z = v[2];
      // Y-axis
      let x1 = x * Math.cos(angleY) + z * Math.sin(angleY);
      let z1 = -x * Math.sin(angleY) + z * Math.cos(angleY);
      // X-axis
      let y2 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
      let z2 = y * Math.sin(angleX) + z1 * Math.cos(angleX);
      return [x1 * scale, y2 * scale];
    });

    for (let e of edges) {
      ctx.beginPath();
      ctx.moveTo(projected[e[0]][0], projected[e[0]][1]);
      ctx.lineTo(projected[e[1]][0], projected[e[1]][1]);
      ctx.stroke();
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
