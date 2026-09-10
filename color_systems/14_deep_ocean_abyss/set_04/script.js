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
  const tokens = `--bg: #05070e;
--surface: #0f1326;
--surface-hover: #171c3b;
--border: #232b57;
--primary: #f97316;
--primary-hover: #fb923c;
--secondary: #06b6d4;
--accent: #ef4444;
--text: #ffffff;
--text-muted: #cbd5e1;
--glow: rgba(249, 115, 22, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Deep Sea Hydrothermal' color palette from 'Deep Ocean Abyss':
- Background: #05070e
- Surface/Cards: #0f1326
- Primary Brand: #f97316
- Secondary: #06b6d4
- Accent: #ef4444
- Main Text: #ffffff
- Muted Text: #cbd5e1
- Border: #232b57
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
