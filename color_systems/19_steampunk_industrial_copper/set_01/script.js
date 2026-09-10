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
  const tokens = `--bg: #120e0b;
--surface: #211a14;
--surface-hover: #30261e;
--border: #47382d;
--primary: #d97706;
--primary-hover: #f59e0b;
--secondary: #0d9488;
--accent: #ef4444;
--text: #fafaf9;
--text-muted: #a8a29e;
--glow: rgba(217, 119, 6, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Burnished Copper' color palette from 'Steampunk Industrial Copper':
- Background: #120e0b
- Surface/Cards: #211a14
- Primary Brand: #d97706
- Secondary: #0d9488
- Accent: #ef4444
- Main Text: #fafaf9
- Muted Text: #a8a29e
- Border: #47382d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
