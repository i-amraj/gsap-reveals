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
  const tokens = `--bg: #fdf2f8;
--surface: #ffffff;
--surface-hover: #fce7f3;
--border: #fbcfe8;
--primary: #db2777;
--primary-hover: #be185d;
--secondary: #0284c7;
--accent: #facc15;
--text: #500724;
--text-muted: #9d174d;
--glow: rgba(219, 39, 119, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cotton Candy Sky' color palette from 'Pastel Playful Sorbet':
- Background: #fdf2f8
- Surface/Cards: #ffffff
- Primary Brand: #db2777
- Secondary: #0284c7
- Accent: #facc15
- Main Text: #500724
- Muted Text: #9d174d
- Border: #fbcfe8
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
