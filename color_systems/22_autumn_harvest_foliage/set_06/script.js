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
  const tokens = `--bg: #140c14;
--surface: #241624;
--surface-hover: #362036;
--border: #4d2f4d;
--primary: #c026d3;
--primary-hover: #d946ef;
--secondary: #f97316;
--accent: #fbbf24;
--text: #ffffff;
--text-muted: #e2e8f0;
--glow: rgba(192, 38, 211, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Foliage Dusk' color palette from 'Autumn Harvest Foliage':
- Background: #140c14
- Surface/Cards: #241624
- Primary Brand: #c026d3
- Secondary: #f97316
- Accent: #fbbf24
- Main Text: #ffffff
- Muted Text: #e2e8f0
- Border: #4d2f4d
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
