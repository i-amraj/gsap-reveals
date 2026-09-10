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
  const tokens = `--bg: #1c1410;
--surface: #2d201a;
--surface-hover: #3d2c24;
--border: #543d32;
--primary: #f59e0b;
--primary-hover: #fbbf24;
--secondary: #e7e5e4;
--accent: #ef4444;
--text: #ffffff;
--text-muted: #a8a29e;
--glow: rgba(245, 158, 11, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dark Mocha Velvet' color palette from 'Dark Coffee Warm Latte':
- Background: #1c1410
- Surface/Cards: #2d201a
- Primary Brand: #f59e0b
- Secondary: #e7e5e4
- Accent: #ef4444
- Main Text: #ffffff
- Muted Text: #a8a29e
- Border: #543d32
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
