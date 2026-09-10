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
  const tokens = `--bg: #030712;
--surface: #0d1326;
--surface-hover: #16203d;
--border: #1f2c52;
--primary: #c084fc;
--primary-hover: #d8b4fe;
--secondary: #e2e8f0;
--accent: #38bdf8;
--text: #f8fafc;
--text-muted: #94a3b8;
--glow: rgba(192, 132, 252, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Midnight Velvet' color palette from 'Luxury Editorial Monochrome':
- Background: #030712
- Surface/Cards: #0d1326
- Primary Brand: #c084fc
- Secondary: #e2e8f0
- Accent: #38bdf8
- Main Text: #f8fafc
- Muted Text: #94a3b8
- Border: #1f2c52
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
