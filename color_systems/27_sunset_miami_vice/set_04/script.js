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
  const tokens = `--bg: #fcf8fc;
--surface: #ffffff;
--surface-hover: #f8eff7;
--border: #edd8eb;
--primary: #db2777;
--primary-hover: #be185d;
--secondary: #0891b2;
--accent: #d97706;
--text: #500724;
--text-muted: #701a75;
--glow: rgba(219, 39, 119, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Art Deco Pastel Light' color palette from 'Sunset Miami Vice':
- Background: #fcf8fc
- Surface/Cards: #ffffff
- Primary Brand: #db2777
- Secondary: #0891b2
- Accent: #d97706
- Main Text: #500724
- Muted Text: #701a75
- Border: #edd8eb
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
