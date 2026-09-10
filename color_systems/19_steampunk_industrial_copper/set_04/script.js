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
  const tokens = `--bg: #08080a;
--surface: #141417;
--surface-hover: #1f1f24;
--border: #2b2b33;
--primary: #f97316;
--primary-hover: #fb923c;
--secondary: #e2e8f0;
--accent: #eab308;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(249, 115, 22, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cast Iron Foundry' color palette from 'Steampunk Industrial Copper':
- Background: #08080a
- Surface/Cards: #141417
- Primary Brand: #f97316
- Secondary: #e2e8f0
- Accent: #eab308
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #2b2b33
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
