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
  const tokens = `--bg: #fdfcfa;
--surface: #ffffff;
--surface-hover: #f8f5ee;
--border: #eee7d8;
--primary: #0f766e;
--primary-hover: #115e59;
--secondary: #c2410c;
--accent: #f59e0b;
--text: #134e4a;
--text-muted: #57534e;
--glow: rgba(15, 118, 110, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Care & Wellness' color palette from 'Clinical Clean Healthtech':
- Background: #fdfcfa
- Surface/Cards: #ffffff
- Primary Brand: #0f766e
- Secondary: #c2410c
- Accent: #f59e0b
- Main Text: #134e4a
- Muted Text: #57534e
- Border: #eee7d8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
