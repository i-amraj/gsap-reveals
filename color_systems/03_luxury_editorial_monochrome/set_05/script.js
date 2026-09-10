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
  const tokens = `--bg: #fcfbf9;
--surface: #ffffff;
--surface-hover: #f7f5f0;
--border: #ebe7df;
--primary: #292524;
--primary-hover: #1c1917;
--secondary: #78716c;
--accent: #b45309;
--text: #1c1917;
--text-muted: #78716c;
--glow: rgba(41, 37, 36, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Parisian Cashmere' color palette from 'Luxury Editorial Monochrome':
- Background: #fcfbf9
- Surface/Cards: #ffffff
- Primary Brand: #292524
- Secondary: #78716c
- Accent: #b45309
- Main Text: #1c1917
- Muted Text: #78716c
- Border: #ebe7df
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
