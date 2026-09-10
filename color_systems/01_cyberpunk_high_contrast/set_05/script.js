const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Swatches Click to Copy
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.getAttribute('data-hex');
    navigator.clipboard.writeText(hex).then(() => {
      showToast(`Copied ${hex} to clipboard!`);
    });
  });
});

// Copy Tokens
document.getElementById('copyTokensBtn').addEventListener('click', () => {
  const tokens = `--bg: #080a14;
--surface: #111424;
--surface-hover: #191e36;
--border: #1e2442;
--primary: #3b82f6;
--primary-hover: #60a5fa;
--secondary: #a855f7;
--accent: #eab308;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(59, 130, 246, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Laser Grid 84' color palette from 'Cyberpunk High Contrast':
- Background: #080a14
- Surface/Cards: #111424
- Primary Brand: #3b82f6
- Secondary: #a855f7
- Accent: #eab308
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #1e2442
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
