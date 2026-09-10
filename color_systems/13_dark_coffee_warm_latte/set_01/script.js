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
  const tokens = `--bg: #140f0c;
--surface: #231b15;
--surface-hover: #32271f;
--border: #47382d;
--primary: #d97706;
--primary-hover: #f59e0b;
--secondary: #fafaf9;
--accent: #b45309;
--text: #fafaf9;
--text-muted: #d6d3d1;
--glow: rgba(217, 119, 6, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Roasted Espresso' color palette from 'Dark Coffee Warm Latte':
- Background: #140f0c
- Surface/Cards: #231b15
- Primary Brand: #d97706
- Secondary: #fafaf9
- Accent: #b45309
- Main Text: #fafaf9
- Muted Text: #d6d3d1
- Border: #47382d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
