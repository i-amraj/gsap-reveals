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
  const tokens = `--bg: #0b101b;
--surface: #141c2e;
--surface-hover: #1c2740;
--border: #233152;
--primary: #38bdf8;
--primary-hover: #7dd3fc;
--secondary: #818cf8;
--accent: #34d399;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(56, 189, 248, 0.3);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Winter Solstice Dark' color palette from 'Nordic Scandinavian Minimal':
- Background: #0b101b
- Surface/Cards: #141c2e
- Primary Brand: #38bdf8
- Secondary: #818cf8
- Accent: #34d399
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #233152
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
