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
  const tokens = `--bg: #fcfbf7;
--surface: #ffffff;
--surface-hover: #f7f4ea;
--border: #ebe4cf;
--primary: #047857;
--primary-hover: #065f46;
--secondary: #b45309;
--accent: #1d4ed8;
--text: #064e3b;
--text-muted: #374151;
--glow: rgba(4, 120, 87, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Jewel Light Ivory' color palette from 'Regal Emerald Jewel':
- Background: #fcfbf7
- Surface/Cards: #ffffff
- Primary Brand: #047857
- Secondary: #b45309
- Accent: #1d4ed8
- Main Text: #064e3b
- Muted Text: #374151
- Border: #ebe4cf
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
