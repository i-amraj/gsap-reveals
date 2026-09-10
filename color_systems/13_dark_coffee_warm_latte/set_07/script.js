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
--surface-hover: #fbeee1;
--border: #f4d7be;
--primary: #c2410c;
--primary-hover: #9a3412;
--secondary: #ca8a04;
--accent: #7c2d12;
--text: #431407;
--text-muted: #7c5234;
--glow: rgba(194, 65, 12, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Chai Cinnamon Spice' color palette from 'Dark Coffee Warm Latte':
- Background: #fefaf6
- Surface/Cards: #ffffff
- Primary Brand: #c2410c
- Secondary: #ca8a04
- Accent: #7c2d12
- Main Text: #431407
- Muted Text: #7c5234
- Border: #f4d7be
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
