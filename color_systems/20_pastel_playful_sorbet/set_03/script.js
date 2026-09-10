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
  const tokens = `--bg: #faf5ff;
--surface: #ffffff;
--surface-hover: #f3e8ff;
--border: #e9d5ff;
--primary: #9333ea;
--primary-hover: #7e22ce;
--secondary: #06b6d4;
--accent: #f59e0b;
--text: #3b0764;
--text-muted: #6b21a8;
--glow: rgba(147, 51, 234, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Lavender Cream' color palette from 'Pastel Playful Sorbet':
- Background: #faf5ff
- Surface/Cards: #ffffff
- Primary Brand: #9333ea
- Secondary: #06b6d4
- Accent: #f59e0b
- Main Text: #3b0764
- Muted Text: #6b21a8
- Border: #e9d5ff
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
