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
  const tokens = `--bg: #0c1715;
--surface: #142623;
--surface-hover: #1d3833;
--border: #2b524b;
--primary: #14b8a6;
--primary-hover: #2dd4bf;
--secondary: #b45309;
--accent: #f59e0b;
--text: #f0fdfa;
--text-muted: #99f6e4;
--glow: rgba(20, 184, 166, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Verdigris Patina' color palette from 'Steampunk Industrial Copper':
- Background: #0c1715
- Surface/Cards: #142623
- Primary Brand: #14b8a6
- Secondary: #b45309
- Accent: #f59e0b
- Main Text: #f0fdfa
- Muted Text: #99f6e4
- Border: #2b524b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
