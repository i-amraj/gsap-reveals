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
  const tokens = `--bg: #f2fcf6;
--surface: #ffffff;
--surface-hover: #e2f9ec;
--border: #c6f2d9;
--primary: #059669;
--primary-hover: #047857;
--secondary: #0f172a;
--accent: #0284c7;
--text: #064e3b;
--text-muted: #475569;
--glow: rgba(5, 150, 105, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Pharma Mint Pure' color palette from 'Clinical Clean Healthtech':
- Background: #f2fcf6
- Surface/Cards: #ffffff
- Primary Brand: #059669
- Secondary: #0f172a
- Accent: #0284c7
- Main Text: #064e3b
- Muted Text: #475569
- Border: #c6f2d9
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
