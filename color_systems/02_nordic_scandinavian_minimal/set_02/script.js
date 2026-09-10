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
  const tokens = `--bg: #fafaf9;
--surface: #ffffff;
--surface-hover: #f5f5f4;
--border: #e7e5e4;
--primary: #d97706;
--primary-hover: #b45309;
--secondary: #44403c;
--accent: #f59e0b;
--text: #1c1917;
--text-muted: #78716c;
--glow: rgba(217, 119, 6, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Birch & Stone' color palette from 'Nordic Scandinavian Minimal':
- Background: #fafaf9
- Surface/Cards: #ffffff
- Primary Brand: #d97706
- Secondary: #44403c
- Accent: #f59e0b
- Main Text: #1c1917
- Muted Text: #78716c
- Border: #e7e5e4
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
