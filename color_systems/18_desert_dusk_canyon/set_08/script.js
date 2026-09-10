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
  const tokens = `--bg: #05060d;
--surface: #0f1224;
--surface-hover: #171c36;
--border: #242b52;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #38bdf8;
--accent: #f43f5e;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Desert Starlight' color palette from 'Desert Dusk Canyon':
- Background: #05060d
- Surface/Cards: #0f1224
- Primary Brand: #f59e0b
- Secondary: #38bdf8
- Accent: #f43f5e
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #242b52
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
