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
  const tokens = `--bg: #140908;
--surface: #261311;
--surface-hover: #381c19;
--border: #522a26;
--primary: #f97316;
--primary-hover: #fb923c;
--secondary: #f59e0b;
--accent: #38bdf8;
--text: #fff7ed;
--text-muted: #fdba74;
--glow: rgba(249, 115, 22, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Sedona Red Rock' color palette from 'Desert Dusk Canyon':
- Background: #140908
- Surface/Cards: #261311
- Primary Brand: #f97316
- Secondary: #f59e0b
- Accent: #38bdf8
- Main Text: #fff7ed
- Muted Text: #fdba74
- Border: #522a26
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
