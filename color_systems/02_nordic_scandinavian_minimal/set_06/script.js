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
  const tokens = `--bg: #fdfbf7;
--surface: #ffffff;
--surface-hover: #f7f2ea;
--border: #ebdcc9;
--primary: #ea580c;
--primary-hover: #c2410c;
--secondary: #431407;
--accent: #fb923c;
--text: #27170a;
--text-muted: #7c6853;
--glow: rgba(234, 88, 12, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Nordic Earth' color palette from 'Nordic Scandinavian Minimal':
- Background: #fdfbf7
- Surface/Cards: #ffffff
- Primary Brand: #ea580c
- Secondary: #431407
- Accent: #fb923c
- Main Text: #27170a
- Muted Text: #7c6853
- Border: #ebdcc9
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
