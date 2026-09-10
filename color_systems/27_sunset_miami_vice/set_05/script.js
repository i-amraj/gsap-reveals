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
  const tokens = `--bg: #06040d;
--surface: #120c24;
--surface-hover: #1c1338;
--border: #2b1e52;
--primary: #f43f5e;
--primary-hover: #fb7185;
--secondary: #8b5cf6;
--accent: #00f3ff;
--text: #ffffff;
--text-muted: #e2e8f0;
--glow: rgba(244, 63, 94, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Neon Boulevard' color palette from 'Sunset Miami Vice':
- Background: #06040d
- Surface/Cards: #120c24
- Primary Brand: #f43f5e
- Secondary: #8b5cf6
- Accent: #00f3ff
- Main Text: #ffffff
- Muted Text: #e2e8f0
- Border: #2b1e52
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
