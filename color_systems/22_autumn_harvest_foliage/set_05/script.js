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
  const tokens = `--bg: #fefaf6;
--surface: #ffffff;
--surface-hover: #fbeef0;
--border: #fad5d8;
--primary: #b91c1c;
--primary-hover: #991b1b;
--secondary: #4d7c0f;
--accent: #d97706;
--text: #450a0a;
--text-muted: #7f1d1d;
--glow: rgba(185, 28, 28, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Autumn Orchard' color palette from 'Autumn Harvest Foliage':
- Background: #fefaf6
- Surface/Cards: #ffffff
- Primary Brand: #b91c1c
- Secondary: #4d7c0f
- Accent: #d97706
- Main Text: #450a0a
- Muted Text: #7f1d1d
- Border: #fad5d8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
