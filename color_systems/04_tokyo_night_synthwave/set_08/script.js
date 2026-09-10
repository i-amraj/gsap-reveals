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
  const tokens = `--bg: #040212;
--surface: #0d0929;
--surface-hover: #171242;
--border: #261e63;
--primary: #c026d3;
--primary-hover: #e879f9;
--secondary: #38bdf8;
--accent: #facc15;
--text: #ffffff;
--text-muted: #a5b4fc;
--glow: rgba(192, 38, 211, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Hyperdrive Tokyo' color palette from 'Tokyo Night Synthwave':
- Background: #040212
- Surface/Cards: #0d0929
- Primary Brand: #c026d3
- Secondary: #38bdf8
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #a5b4fc
- Border: #261e63
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
