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
  const tokens = `--bg: #02070e;
--surface: #061324;
--surface-hover: #0a1e38;
--border: #0f2f57;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #f43f5e;
--accent: #facc15;
--text: #f0f9ff;
--text-muted: #7dd3fc;
--glow: rgba(0, 240, 255, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Supersonic Cyan' color palette from 'Aerospace Cockpit HUD':
- Background: #02070e
- Surface/Cards: #061324
- Primary Brand: #00f0ff
- Secondary: #f43f5e
- Accent: #facc15
- Main Text: #f0f9ff
- Muted Text: #7dd3fc
- Border: #0f2f57
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
