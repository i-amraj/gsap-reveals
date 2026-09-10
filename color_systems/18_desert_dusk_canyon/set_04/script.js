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
  const tokens = `--bg: #1c0d08;
--surface: #2d160e;
--surface-hover: #3d1f15;
--border: #542c1e;
--primary: #ea580c;
--primary-hover: #f97316;
--secondary: #eab308;
--accent: #10b981;
--text: #fff7ed;
--text-muted: #fdba74;
--glow: rgba(234, 88, 12, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Burnt Clay Mesa' color palette from 'Desert Dusk Canyon':
- Background: #1c0d08
- Surface/Cards: #2d160e
- Primary Brand: #ea580c
- Secondary: #eab308
- Accent: #10b981
- Main Text: #fff7ed
- Muted Text: #fdba74
- Border: #542c1e
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
