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
  const tokens = `--bg: #09090b;
--surface: #141417;
--surface-hover: #1f1f24;
--border: #2e2e36;
--primary: #facc15;
--primary-hover: #fde047;
--secondary: #ec4899;
--accent: #3b82f6;
--text: #ffffff;
--text-muted: #a1a1aa;
--glow: rgba(250, 204, 21, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Warehouse 99' color palette from 'Glitch Acid Rave':
- Background: #09090b
- Surface/Cards: #141417
- Primary Brand: #facc15
- Secondary: #ec4899
- Accent: #3b82f6
- Main Text: #ffffff
- Muted Text: #a1a1aa
- Border: #2e2e36
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
