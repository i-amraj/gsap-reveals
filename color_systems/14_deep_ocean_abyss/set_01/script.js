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
  const tokens = `--bg: #020c1b;
--surface: #071b38;
--surface-hover: #0c2852;
--border: #123973;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #3b82f6;
--accent: #34d399;
--text: #f0fdfa;
--text-muted: #7dd3fc;
--glow: rgba(0, 240, 255, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Mariana Trench Aqua' color palette from 'Deep Ocean Abyss':
- Background: #020c1b
- Surface/Cards: #071b38
- Primary Brand: #00f0ff
- Secondary: #3b82f6
- Accent: #34d399
- Main Text: #f0fdfa
- Muted Text: #7dd3fc
- Border: #123973
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
