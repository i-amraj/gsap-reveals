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
  const tokens = `--bg: #080512;
--surface: #130b29;
--surface-hover: #1f1242;
--border: #311c69;
--primary: #a855f7;
--primary-hover: #c084fc;
--secondary: #22d3ee;
--accent: #facc15;
--text: #ffffff;
--text-muted: #d8b4fe;
--glow: rgba(168, 85, 247, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Violet Nocturne' color palette from 'Lavender Haze Dreamscape':
- Background: #080512
- Surface/Cards: #130b29
- Primary Brand: #a855f7
- Secondary: #22d3ee
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #d8b4fe
- Border: #311c69
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
