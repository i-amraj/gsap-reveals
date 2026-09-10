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
  const tokens = `--bg: #fffdfa;
--surface: #ffffff;
--surface-hover: #fdf5e8;
--border: #f8e2c0;
--primary: #ea580c;
--primary-hover: #c2410c;
--secondary: #78350f;
--accent: #f59e0b;
--text: #431407;
--text-muted: #854d0e;
--glow: rgba(234, 88, 12, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Caramel Macchiato' color palette from 'Dark Coffee Warm Latte':
- Background: #fffdfa
- Surface/Cards: #ffffff
- Primary Brand: #ea580c
- Secondary: #78350f
- Accent: #f59e0b
- Main Text: #431407
- Muted Text: #854d0e
- Border: #f8e2c0
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
