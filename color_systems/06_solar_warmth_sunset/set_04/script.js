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
  const tokens = `--bg: #0c0604;
--surface: #1f0f09;
--surface-hover: #2f170e;
--border: #472416;
--primary: #f97316;
--primary-hover: #fb923c;
--secondary: #facc15;
--accent: #ef4444;
--text: #fff7ed;
--text-muted: #fdba74;
--glow: rgba(249, 115, 22, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Solar Flare Ember' color palette from 'Solar Warmth Sunset':
- Background: #0c0604
- Surface/Cards: #1f0f09
- Primary Brand: #f97316
- Secondary: #facc15
- Accent: #ef4444
- Main Text: #fff7ed
- Muted Text: #fdba74
- Border: #472416
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
