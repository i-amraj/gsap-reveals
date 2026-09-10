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
  const tokens = `--bg: #fdf8f3;
--surface: #ffffff;
--surface-hover: #faede1;
--border: #f4d8be;
--primary: #c2410c;
--primary-hover: #9a3412;
--secondary: #ca8a04;
--accent: #0284c7;
--text: #431407;
--text-muted: #78350f;
--glow: rgba(194, 65, 12, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Adobe Sand Light' color palette from 'Desert Dusk Canyon':
- Background: #fdf8f3
- Surface/Cards: #ffffff
- Primary Brand: #c2410c
- Secondary: #ca8a04
- Accent: #0284c7
- Main Text: #431407
- Muted Text: #78350f
- Border: #f4d8be
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
