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
  const tokens = `--bg: #090d16;
--surface: #121b2d;
--surface-hover: #1a2740;
--border: #253759;
--primary: #f472b6;
--primary-hover: #f687b3;
--secondary: #38bdf8;
--accent: #fde047;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(244, 114, 182, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Dark Sorbet Neon' color palette from 'Pastel Playful Sorbet':
- Background: #090d16
- Surface/Cards: #121b2d
- Primary Brand: #f472b6
- Secondary: #38bdf8
- Accent: #fde047
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #253759
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
