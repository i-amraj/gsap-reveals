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
  const tokens = `--bg: #fef9f5;
--surface: #ffffff;
--surface-hover: #fbf0e6;
--border: #f2dbcb;
--primary: #c2410c;
--primary-hover: #9a3412;
--secondary: #431407;
--accent: #d97706;
--text: #2a140a;
--text-muted: #7c6853;
--glow: rgba(194, 65, 12, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Warm Terracotta Earth' color palette from 'Biophilic Organic Nature':
- Background: #fef9f5
- Surface/Cards: #ffffff
- Primary Brand: #c2410c
- Secondary: #431407
- Accent: #d97706
- Main Text: #2a140a
- Muted Text: #7c6853
- Border: #f2dbcb
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
